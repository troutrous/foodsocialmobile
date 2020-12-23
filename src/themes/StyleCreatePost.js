import { StyleSheet, Dimensions } from 'react-native';
const widthWindow = Dimensions.get('window').width;
export default StyleCreatePost = StyleSheet.create({
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
    viewScrollContainer: {
        flex: 1,
    },
    viewContentImage: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    viewItemContentImage: {
        width: widthWindow / 3 - 2,
        height: widthWindow / 3 - 2,
    },
    imageItemContentImage: {
        width: '100%',
        height: '100%',
    },
    viewFooter: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewItemFooter: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textItemFooter: {
        fontSize: 16
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    iconCapture: {
        color: '#fff',
    },
    pendingView: {
        backgroundColor: '#000',
        flex: 1,
    },
    imagePreview: {
        width: widthWindow,
        height: widthWindow,
        resizeMode: 'cover',
    },
    inputViewContent: {
        flex: 1,
    },
    inputContent: {
        flex: 1,
        padding: 10,
        textAlignVertical: 'top',
        fontFamily: 'NunitoSans-Regular',
        fontSize: 18,
    },
    imageViewContent: {
        flex: 1,
        width: widthWindow,
        maxHeight: widthWindow,
    },
    imageContent: {
        resizeMode: 'cover',
        flex: 1,
    },
})