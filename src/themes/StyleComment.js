import { StyleSheet } from 'react-native';

const StyleComment = StyleSheet.create({
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
    containerViewListComment: {
        flex: 1,
    },
    containerTextInputComment: {
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 0.4,
        borderColor: '#808080'
    },
    containerCommentItem: {
        flexDirection: 'row',
        marginTop: 20,
    },
    viewAvatarComment: {
        flex: 2,
        padding: 5,
        alignItems: 'center'
    },
    imageAvatarComment: {
        height: 40,
        width: 40,
        resizeMode: 'cover',
        borderRadius: 20,
        borderWidth: 0.1,
        borderColor: '#000',
    },
    viewContentComment: {
        flex: 10,
    },
    contentComment: {
        paddingRight: 20,
    },
    nameUserComment: {
        fontWeight: 'bold',
        marginLeft: 10,
    },
    textComment: {

    },
    viewReactComment: {
        flexDirection: 'row',
        marginTop: 5,
    },
    buttonReactComment: {
        marginLeft: 10,
    },
    textInputComment: {
        flex: 1,
        paddingLeft: 10,
    },
    buttonSendComment: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    }
});

export default StyleComment;