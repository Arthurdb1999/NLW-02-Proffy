import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import ITeacher from '../../components/TeacherItem/ITeacher';

import api from '../../services/api'

import styles from './styles';

const TeacherList: React.FC = () => {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)

    const [favorites, setFavorites] = useState<number[]>([])

    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('')
    const [time, setTime] = useState('')
    const [week_day, setWeekday] = useState('')

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response)
                const favoritedTeachersIds = favoritedTeachers.map((teacher: ITeacher) => {
                    return teacher.id
                })

                setFavorites(favoritedTeachersIds)
            }
        })
    }

    useFocusEffect(() => {
        loadFavorites()
    })

    function handleFiltersSubmit() {
        loadFavorites()

        api.get('/classes', {
            params: {
                subject, week_day, time
            }
        }).then(response => {
            setTeachers(response.data)
            setIsFiltersVisible(false)
        })
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton
                        onPress={() => setIsFiltersVisible(!isFiltersVisible)}
                    >
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                )}>
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeekday(text)}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>
                        <RectButton
                            style={styles.submitButton}
                            onPress={handleFiltersSubmit}
                        >
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: ITeacher) => (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default TeacherList;