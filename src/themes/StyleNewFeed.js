import { StyleSheet, Dimensions } from 'react-native';
const widthWindow = Dimensions.get('window').width;
const GLOBAL_COLOR_BLUE = '#23156a'
const StyleNewFeed = StyleSheet.create({
    containerNewFeed: {
        flex: 1,
    },
    containerHeaderNewFeed: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textHeaderNewFeed: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',

        color: '#03a9f4',
        fontSize: 26,
        fontWeight: '500',
        fontFamily: 'NunitoSans-ExtraBold',
    },
    containerPostNewFeed: {
        backgroundColor : '#fff',
        flex: 1,
    },
    containerPostItemNewFeed: {
        marginTop: 10,
    },
    headerPostNewFeed: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        height: 50,
        paddingVertical: 5,
        paddingLeft: 10
    },

    userPostNewFeed: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: '100%'
    },

    avatarUserPostNewFeed: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 0.1
    },

    nameUserPostNewFeed: {
        lineHeight: 40,
        fontSize: 15,
        paddingLeft: 10,
        fontWeight: '700'
    },
    textsContentPostNewFeed: {
        paddingHorizontal: 10
    },
    imagesContentPostNewFeed: {
        width: widthWindow,
    },
    textContentPostNewFeed: {
        paddingHorizontal: 10
    },
    imageContentPostNewFeed: {
        width: widthWindow,
        height: widthWindow
    },

    containerReactPostNewFeed: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40
    },
    asideReactPostNewFeed: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
    },
    iconReactPostNewFeed: {
        height: '100%',
        width: 40,
        textAlign: 'center',
        lineHeight: 40,
    },

    containerDetailPostNewFeed: {
        paddingHorizontal: 10
    },
    textLikeDetail: {
        color: '#000'
    },
    textBold: {
        fontWeight: 'bold'
    },
    containerCommentPostNewFeed: {
        paddingHorizontal: 10
    },
    viewCommentPostNewFeed: {
        flexDirection: 'row',
    },
    containerInputCommentPost: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    inputCommentPost: {
        flex: 1,
        height: 40,
        padding: 10,
    },
    avtarInputCommentPost: {
        height: 40,
        width: 40,
        borderColor: '#000',
        borderWidth: 0.1,
        borderRadius: 25,
    }
});

export default StyleNewFeed;