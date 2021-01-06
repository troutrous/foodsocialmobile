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
        justifyContent: 'space-between'
    },
    containerHeaderNewFeedLeft: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignItems: 'center'
    },
    textHeaderNewFeed: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        marginLeft: 10,
        color: '#03a9f4',
        fontSize: 22,
        fontWeight: '500',
        fontFamily: 'NunitoSans-ExtraBold',
    },
    containerPostNewFeed: {
        backgroundColor: '#fff',
        flex: 1,
    },
    containerPostItemNewFeed: {
        marginTop: 20,
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
        fontFamily: 'NunitoSans-Bold',
    },
    textsContentPostNewFeed: {

    },
    imagesContentPostNewFeed: {
        width: widthWindow,
        height: widthWindow
    },
    textContentPostNewFeed: {
        paddingHorizontal: 10,
        marginTop: 10
    },
    imageContentPostNewFeed: {
        width: widthWindow,
        height: widthWindow,
        borderRadius: 10
        
    },

    containerReactPostNewFeed: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
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
    },
    logoIconHeaderNewFeed: {
        color: '#f56c42',
    },
    containerModal: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    viewModal: {
        height: 150,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden'
    },
    touchItemModel: {
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    backgroundRed: {
        backgroundColor: '#f56c42',
    },
    backgroundBlue: {
        backgroundColor: '#03a9f4',
    },
    textItemModel: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: 18,
        color: '#000',
        marginLeft: 10,
    },
});

export default StyleNewFeed;