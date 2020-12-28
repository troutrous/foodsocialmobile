import { StyleSheet, Dimensions } from 'react-native';

const StyleProfile = StyleSheet.create({
    fontBold: {
        fontFamily: 'NunitoSans-Bold'
    },
    fontRegular: {
        fontFamily: 'NunitoSans-Regular'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerCard: {
        height: 120,
        flexDirection: 'row',
    },
    containerBio: {
        paddingHorizontal: 10,
    },
    containerPostList: {
        flex: 1,
    },
    viewAvatarCard: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    imageAvatarCard: {
        flex: 1,
        borderWidth: 0.6,
        borderColor: '#828282',
        resizeMode: 'cover',
        aspectRatio: 1,
        borderRadius: Dimensions.get('window').height / 2,
    },
    viewInfoCard: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    viewInfoItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberInfo: {
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 18,
    },
    titleInfo: {
        color: '#000',
        fontSize: 14,
    },

    viewWrapPostProfileItem: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        flex: 10,
    },
    containerPostProfileItem: {
        width: Dimensions.get('screen').width / 3,
        height: Dimensions.get('screen').width / 3,
        backgroundColor: 'white',
        padding: 1,
    },
    imagePostProfileItem: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    buttonEditProfile: {
        height: 30,
        borderRadius: 5,
        borderColor: '#5c5c5c',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    textButtonEditProfile: {
        fontWeight: 'bold'
    },
    containerDetialInfo: {

    },
    viewDetialInfoItem: {
        flexDirection: 'row',
    },
});
export default StyleProfile;