import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import StyleSignIn from '../themes/StyleSignIn';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';


const SignIn = (props) => {
  const { navigation } = props;
  const { route } = props
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
  const temp = 'http://192.168.1.16:3000/auth/signinwithgoogle';
  const checkGoogleUser = async (user) => {
    fetch(temp, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset = utf-8'
      },
      body: JSON.stringify({
        ...user
      })
    })
      .then((response) => response.json())
      .then((dataResponse) => {
        if (!dataResponse.existProfile) {
          navigation.navigate('SignUpStack', { screen: 'SignUpUsername' });
        }
      })
  }
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userGoogle = await GoogleSignin.signIn();
      const user = await checkGoogleUser(userGoogle);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      console.log(error);
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log(userInfo);
      // this.setState({userInfo});
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailOnChange = (value) => {
    setEmail(value);
  };
  const handlePasswordOnChange = (value) => {
    setPassword(value);
  };
  const handleTouchOutside = () => {
    Keyboard.dismiss();
  }
  const handleCreateAccount = () => {
    navigation.navigate('SignUpStack', { screen: 'SignUpUserSignin' });
  }
  const handleFogotPassword = () => {
    signOut();
  }
  const handleSignIn = () => {
    fetch('http://192.168.43.212:3000/auth/signin', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset = utf-8'
      },
      body: JSON.stringify({
        userSignin: email,
        userPassword: password
      })
    })
      .then((response) => response.json())
      .then((dataResponse) => {
        if (dataResponse.tokenID) {
          navigation.navigate('NewFeed');
        }
        else {
          Alert.alert(
            "Opps",
            dataResponse.message,
            [
              { text: "OK" }
            ],
          );
        }
      })
      .catch((err) => console.log(err));
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
            value={email}
          />
          <TextInput
            style={[StyleSignIn.inputSignIn, StyleSignIn.fontSemiBold]}
            placeholder={'Password'}
            placeholderTextColor={'#fbfbfb'}
            onChangeText={(value) => handlePasswordOnChange(value)}
            value={password}
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={handleSignIn}
            style={StyleSignIn.buttonSignIn}>
            <Text style={[StyleSignIn.fontBold, StyleSignIn.buttonTextSignIn]}>Sign In</Text>
          </TouchableOpacity>
          <GoogleSigninButton
            style={StyleSignIn.googleSigninButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={() => {
              signInWithGoogle();
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
