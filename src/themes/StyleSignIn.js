import { StyleSheet } from 'react-native';
const GLOBAL_COLOR_BLUE = '#23156a'
const StyleSignIn = StyleSheet.create({
  fontSemiBold: {
    fontFamily: 'NunitoSans-SemiBold'
  },
  fontBold: {
    fontFamily: 'NunitoSans-Bold'
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: '100%',
    width: '100%',
    backgroundColor: '#000000',
  },
  viewContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelTitle: {
    color: 'white',
    fontSize: 36,
    marginBottom: 40,
    textAlign: 'left',
    width: '100%',
  },
  inputSignIn: {
    borderColor: '#fff',
    borderBottomWidth: 0.5,
    width: '100%',
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
    height: 45,
  },
  buttonSignIn: {
    backgroundColor: '#fff',
    height: 40,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  buttonTextSignIn: {
    color: GLOBAL_COLOR_BLUE,
    fontSize: 22,
  },
  googleSigninButton: {
    width: '100%',
    height: 50,
    marginBottom: 10,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonTextSmall: {
    color: '#fff',
    fontSize: 16,
    textDecorationColor: '#fff',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline'
  },
  buttonDisabled: {
    opacity: 0.9
  }
});
export default StyleSignIn;
