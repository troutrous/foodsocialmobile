import { StyleSheet } from 'react-native';
const GLOBAL_COLOR_BLUE = '#23156a'
const StyleSignUpName = StyleSheet.create({
  fontSemiBold: {
    fontFamily: 'NunitoSans-SemiBold'
  },
  fontBold: {
    fontFamily: 'NunitoSans-Bold'
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  labelHeader: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  labelsubHeader: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
    color: '#6b6b6b'
  },
  labelOptions: {
    fontSize: 16,
    color: '#000',
  },
  nameContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'space-between',
  },
  addressContainer: {
    width: '100%',
},
  genderContainer: {
    width: '100%',
},
  textInput: {
      borderBottomColor: GLOBAL_COLOR_BLUE,
      borderBottomWidth: 1,
      width: '48%',
  },
  textInputAddress: {
    borderBottomColor: GLOBAL_COLOR_BLUE,
    borderBottomWidth: 1,
    width: '100%',
  },
  buttonNext: {
    marginTop: 40,
    width: '100%',
    backgroundColor: GLOBAL_COLOR_BLUE,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonNextDisabled: {
    opacity: 0.7,
  },
  textButtonNext: {
      color: '#fff'
  },
  optionsContainer: {
      flexDirection: 'row',
      borderBottomColor: GLOBAL_COLOR_BLUE,
      borderBottomWidth: 1,
      borderBottomColor: '#adadad',
      justifyContent: 'space-between',
      paddingVertical: 10,
      marginBottom: 10,
  },
});
export default StyleSignUpName;
