import { StyleSheet, Dimensions } from 'react-native';
const widthWindow = Dimensions.get("screen").width
export default StyleSearch = StyleSheet.create({
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
    viewTextInput: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    textInput: {
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderColor: '#a3a3a3',
        height: 50,
        width: '100%',
    },
    viewSearchContent: {
        flex: 1,
    },
    viewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    contentItemType1: {
        width: widthWindow / 2,
        height: widthWindow + 10,
        padding: '2%',
        justifyContent: 'space-between',
    },
    contentItemType2: {
        width: widthWindow / 2,
        height: widthWindow,
        padding: '2%',
        justifyContent: 'space-between',
    },
    contentItemType3: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: widthWindow,
        height: widthWindow / 2,
        padding: '2%',
    },
    imageItemType1: {
        height: '73%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    imageItemType2: {
        height: '48%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    imageItemType3: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    imageItemType4: {
        height: '23%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
})