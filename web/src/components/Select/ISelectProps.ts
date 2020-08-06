import { SelectHTMLAttributes } from 'react'

export default interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    options: Array<{
        value: string;
        label: string;
    }>
}