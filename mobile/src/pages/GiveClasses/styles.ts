import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257e5',
        flex: 1,
        justifyContent: "center",
        padding: 40
    },

    content: {
        flex: 1,
        justifyContent: "center",
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        maxWidth: 180,
        lineHeight: 37,
        fontSize: 32
    },

    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 26,
        maxWidth: 240
    },

    okButton: {
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: "center",
        justifyContent: "center", 
        borderRadius: 8
    },

    okButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    }

})

export default styles