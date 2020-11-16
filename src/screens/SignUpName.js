import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import StyleSignUpName from '../themes/StyleSignUpName';

const SignUpName = (props) => {
  const { navigation } = props;
  const { route } = props;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleWithoutFeedback = () => {
    Keyboard.dismiss();
  };
  const handleNextSignUp = () => {
    navigation.navigate('SignUpEmail');
  };
  const handleChangeFirstName = (value) => {
    setFirstName(value);
  };
  const handleChangeLastName = (value) => {
    setLastName(value);
  };
  return (
    <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
      <View style={StyleSignUpName.viewContainer}>
        <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelHeader]}>What's your name?</Text>
        <View style={StyleSignUpName.nameContainer}>
          <TextInput onChangeText={(value) => handleChangeFirstName(value)} value={firstName} placeholder={'First Name'} style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInput]} autoFocus ></TextInput>
          <TextInput onChangeText={(value) => handleChangeLastName(value)} value={lastName} placeholder={'Last Name'} style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInput]}></TextInput>
        </View>
        {
          firstName.length && lastName.length && (
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
SignUpName.navigationOptions = {
  title: 'Name',
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#000',
};

export default SignUpName;