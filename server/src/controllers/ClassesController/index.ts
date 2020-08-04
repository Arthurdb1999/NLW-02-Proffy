import { Response, Request } from "express"

import db from "../../database/connection"

import IScheduleItem from "./IScheduleItem"
import HourParser from "../../utils/HourParser"

export default class ClassesController {

    async index(req: Request, res: Response) {
        const filters = req.query

        const week_day = filters.week_day as string
        const subject = filters.subject as string
        const time = filters.time as string

        if (!week_day || !subject || !time) {
            return res.status(400).json({ err: 'Missing filters to search classes' })
        }

        const timeInMinutes = HourParser(time)

        const classes = await db('classes')
            .whereExists(function() {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                    .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*'])

        return res.json(classes)
    }

    async create(req: Request, res: Response) {

        const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body

        const t1 = await db.transaction()

        try {

            const [insertedUserId] = await t1('users').insert({
                name, avatar, whatsapp, bio
            })

            const [insertedClassId] = await t1('classes').insert({
                subject,
                cost,
                user_id: insertedUserId
            })

            await Promise.all(
                schedule.map(async (scheduleItem: IScheduleItem) => {
                    await t1('class_schedule').insert({
                        week_day: scheduleItem.week_day,
                        from: HourParser(scheduleItem.from),
                        to: HourParser(scheduleItem.to),
                        class_id: insertedClassId
                    })
                })
            )

            await t1.commit()

            return res.status(201).json()

        } catch (err) {
            console.log(err)
            await t1.rollback()
            return res.status(400).json({ error: 'Unexpected error while creating new class' })
        }
    }
}