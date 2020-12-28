import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from '@react-native-community/google-signin';
import React, { useEffect, useState } from 'react';
import {
  Alert, ImageBackground,
  Keyboard, Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback, View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  addSignupTicketGoogle, addSignupEmail, addSignupFirstname, addSignupIDGoogle, addSignupLastname, addSignupSignin, addSignupType, addProfile, addToken
} from '../actions';
import { signIn, signInWithGoogle } from '../api/Sign';
import { setToken, setProfile } from '../commons/Storage';

import StyleSignIn from '../themes/StyleSignIn';
const SignIn = (props) => {
  const { navigation } = props;
  const { route } = props
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const tokenRedux = useSelector(state => state.token.idToken); 
  const dispatch = useDispatch();
  useEffect(() => {
    configureGoogleSign();
  }, []);

  const configureGoogleSign = () => {
    GoogleSignin.configure({
      webClientId:
        "535966501060-u53clbgqvolg9iso836ldg10on8egmeo.apps.googleusercontent.com",
      offlineAccess: true,
    });
  }


  const handleSignInWithGoogle = async () => {
    try {
      const currentUser = await GoogleSignin.getCurrentUser();
      if (currentUser) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
      }
      await GoogleSignin.hasPlayServices();
      const userGoogle = await GoogleSignin.signIn();
      const dataResponse = await signInWithGoogle(userGoogle);
      if (dataResponse.successSignin == true) {
        dispatch(addProfile(dataResponse));
        dispatch(addToken(dataResponse.token));
        setToken(dataResponse.token);
        setProfile(dataResponse);
        navigation.navigate('FeedBottomTab', { screen: 'NewFeed' });
      } else if (dataResponse.successSignin == false) {
        dispatch(addSignupSignin(userGoogle.user.email));
        dispatch(addSignupEmail(userGoogle.user.email));
        dispatch(addSignupType(2));
        dispatch(addSignupFirstname(userGoogle.user.givenName));
        dispatch(addSignupLastname(userGoogle.user.familyName));
        dispatch(addSignupIDGoogle(userGoogle.user.id));
        dispatch(addSignupTicketGoogle(userGoogle.idToken));
        navigation.navigate('SignUpStack', { screen: 'SignUpUserSignin' });
      }

    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentGoogleInfo = async () => {
    try {
      const currentUser = await GoogleSignin.getCurrentUser();
      return currentUser;
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
        console.log(error);
      }
    }
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    // this.setState({isLoginScreenPresented: !isSignedIn});
    console.log(isSignedIn);
  };

  const getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    this.setState({ currentUser });
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
  };

  const revokeAccess = async () => {
    try {
      await GoogleSignin.revokeAccess();
      console.log('deleted');
    } catch (error) {
      console.error(error);
    }
  };

  const [userSignin, setUserSignin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const handleEmailOnChange = (value) => {
    setUserSignin(value);
  };
  const handlePasswordOnChange = (value) => {
    setUserPassword(value);
  };
  const handleTouchOutside = () => {
    Keyboard.dismiss();
  }
  const handleCreateAccount = () => {
    dispatch(addSignupType(1));
    navigation.navigate('SignUpStack', { screen: 'SignUpUserSignin' });
  }
  const handleFogotPassword = () => {
    signOut();
  }
  const handleSignIn = async () => {
    const dataResponse = await signIn({ userSignin, userPassword });
    if (dataResponse.successSignin == true) {
      dispatch(addProfile(dataResponse));
      dispatch(addToken(dataResponse.token));
      setToken(dataResponse.token);
      setProfile(dataResponse);
      navigation.navigate('FeedBottomTab', { screen: 'NewFeed' });
    } else if (dataResponse.successSignin == false) {
      Alert.alert(
        'Thông báo',
        'Thất bại'
      );
    }

  }
  return (
    <ImageBackground style={StyleSignIn.imageBackground} source={{ uri: 'https://i.pinimg.com/originals/55/49/e2/5549e212ed1f9944512d2f599278ded0.png' }}>
      <TouchableWithoutFeedback onPress={handleTouchOutside}>
        <View style={StyleSignIn.viewContainer}>
          <Text style={[StyleSignIn.fontSemiBold, StyleSignIn.labelTitle]}>Welcome to{"\n"}FoodSocial</Text>
          <TextInput
            style={[StyleSignIn.fontSemiBold, StyleSignIn.inputSignIn]}
            placeholder={'Username'}
            placeholderTextColor={'#fbfbfb'}
            onChangeText={(value) => handleEmailOnChange(value)}
            value={userSignin}
          />
          <TextInput
            style={[StyleSignIn.inputSignIn, StyleSignIn.fontSemiBold]}
            placeholder={'Password'}
            placeholderTextColor={'#fbfbfb'}
            onChangeText={(value) => handlePasswordOnChange(value)}
            value={userPassword}
            secureTextEntry={true}
          />
          {
            userSignin && userPassword && (
              <TouchableOpacity
                onPress={handleSignIn}
                style={StyleSignIn.buttonSignIn}
                disabled={false}
              >
                <Text style={[StyleSignIn.fontBold, StyleSignIn.buttonTextSignIn]}>Sign In</Text>
              </TouchableOpacity>
            ) || (
              <TouchableOpacity
                onPress={handleSignIn}
                style={[StyleSignIn.buttonSignIn, StyleSignIn.buttonDisabled]}
                disabled={true}
              >
                <Text style={[StyleSignIn.fontBold, StyleSignIn.buttonTextSignIn]}>Sign In</Text>
              </TouchableOpacity>)
          }

          <GoogleSigninButton
            style={StyleSignIn.googleSigninButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={() => {
              handleSignInWithGoogle();
            }}
          />
          <View style={StyleSignIn.flexContainer}>
            <TouchableOpacity onPress={handleFogotPassword}><Text style={[StyleSignIn.fontSemiBold, StyleSignIn.buttonTextSmall]}>Fogot Password</Text></TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount}><Text style={[StyleSignIn.fontSemiBold, StyleSignIn.buttonTextSmall]}>Create Account</Text></TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
SignIn.navigationOptions = {
  title: 'Sign In',
  headerStyle: {
    backgroundColor: '#ff727d',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerShown: false,
};

export default SignIn;
