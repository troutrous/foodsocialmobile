import { StyleSheet } from 'react-native';
export default StyleNotification = StyleSheet.create({
    fontBold: {
        fontFamily: 'NunitoSans-Bold'
    },
    fontRegular: {
        fontFamily: 'NunitoSans-Regular'
    },
    containerScreen: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerItem: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    viewAvatarNoti: {
        flex: 2,
        alignItems: 'center'
    },
    imageAvatarNoti: {
        height: 40,
        width: 40,
        resizeMode: 'cover',
        borderRadius: 20,
        borderWidth: 0.1,
        borderColor: '#000',
    },
    viewTextNoti: {
        flex: 10,
        justifyContent: 'center',
    },
})