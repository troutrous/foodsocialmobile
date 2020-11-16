import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import StyleSignUpName from '../themes/StyleSignUpName';

const SignUpUsername = (props) => {
  const { navigation } = props;
  const { route } = props;

  const [username, setUsername] = useState('');

  const signupProfile = useMemo(() => ({
    userSignin: null,
  }));

  useEffect(() => {
    signupProfile.userSignin = username;
    console.log(signupProfile);
  }, []);
  useEffect(() => {
    signupProfile.userSignin = username;
    console.log(signupProfile);
  }, [username]);

  const handleWithoutFeedback = () => {
    Keyboard.dismiss();
  };
  const handleNextSignUp = () => {
    navigation.navigate('SignUpPassword', {signupProfile: signupProfile});
  };
  const handleChangeUsername = (value) => {
    setUsername(value);
  };
  return (
    <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
      <View style={StyleSignUpName.viewContainer}>
        <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelHeader]}>What's your username?</Text>
        <View style={StyleSignUpName.addressContainer}>
          <TextInput onChangeText={(value) => handleChangeUsername(value)} value={username} placeholder={'Username'} style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInputAddress]} autoFocus ></TextInput>
        </View>
        {
          username && (
            <TouchableOpacity style={StyleSignUpName.buttonNext} onPress={handleNextSignUp}>
              <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textButtonNext]}>Next</Text>
            </TouchableOpacity>
          ) || (
            <TouchableOpacity style={[StyleSignUpName.buttonNext, StyleSignUpName.buttonNextDisabled]} disabled={true}>
              <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textButtonNext]}>Next</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </TouchableWithoutFeedback>
  )
}
SignUpUsername.navigationOptions = {
  title: 'Username',
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#000',
};

export default SignUpUsername;