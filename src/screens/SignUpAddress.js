import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import StyleSignUpName from '../themes/StyleSignUpName';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SignUpAddress = (props) => {
  const { navigation } = props;
  const { route } = props;

  const [address, setAddress] = useState('');

  const handleWithoutFeedback = () => {
    Keyboard.dismiss();
  };
  const handleNextSignUp = () => {
    navigation.navigate('SignUpPhone');
  };
  const handleChangeAddress = (value) => {
    setAddress(value);
  };
  return (
    <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
      <View style={StyleSignUpName.viewContainer}>
        <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelHeader]}>What's your address?</Text>
        <View style={StyleSignUpName.addressContainer}>
          <TextInput onChangeText={(value) => handleChangeAddress(value)} value={address} placeholder={'Address'} style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInputAddress]} autoFocus ></TextInput>
        </View>
        {
          address && (
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
SignUpAddress.navigationOptions = {
  title: 'Address',
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#000',
};

export default SignUpAddress;