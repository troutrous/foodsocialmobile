import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import StyleSignUpName from '../themes/StyleSignUpName';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SignUpPhone = (props) => {
  const { navigation } = props;
  const { route } = props;

  const [phone, setPhone] = useState('');

  const handleWithoutFeedback = () => {
    Keyboard.dismiss();
  };
  const handleNextSignUp = () => {
  };
  const handleChangePhone = (value) => {
    setPhone(value);
  };
  return (
    <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
      <View style={StyleSignUpName.viewContainer}>
        <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelHeader]}>What's your phone?</Text>
        <View style={StyleSignUpName.addressContainer}>
          <TextInput onChangeText={(value) => handleChangePhone(value)} value={phone} placeholder={'Number phone'} style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInputAddress]} autoFocus keyboardType={'numeric'}></TextInput>
        </View>
        {
          phone && (
            <TouchableOpacity style={StyleSignUpName.buttonNext} onPress={handleNextSignUp}>
              <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textButtonNext]}>Finish</Text>
            </TouchableOpacity>
          ) || (
            <TouchableOpacity style={[StyleSignUpName.buttonNext, StyleSignUpName.buttonNextDisabled]} disabled={true}>
              <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textButtonNext]}>Finish</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </TouchableWithoutFeedback>
  )
}
SignUpPhone.navigationOptions = {
  title: 'Phone',
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#000',
};

export default SignUpPhone;