import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';

const TeacherItem: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    source={{ uri: 'https://avatars1.githubusercontent.com/u/33229271?s=460&u=70a7ae6730564ac73b2e438b436bc5a92f93e198&v=4' }}
                    style={styles.avatar}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Arthur</Text>
                    <Text style={styles.subject}>Math</Text>
                </View>
            </View>
            <Text style={styles.bio}>Fullstack Developer @ ASP Softwares. Amante de Node.js, React, Angular, React-Native e das mais novas tecnologias Web! E também gosto de matemática!",</Text>
            <View style={styles.footer}>
                <Text style={styles.price}>Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 2,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutlineIcon} />

                        {/* 21min de video */}
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;