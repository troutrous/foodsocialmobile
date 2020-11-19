import React, { useState, useEffect, useMemo } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import StyleSignUpName from '../themes/StyleSignUpName';
import { addUserSignin, addUserType } from '../actions';

const SignUpUserSignin = (props) => {
  const { navigation } = props;
  const { route } = props;
  const dispatch = useDispatch();
  const userSigninRedux = useSelector(state => state.sign.userSignin);
  const [userSignin, setUserSignin] = useState(userSigninRedux);

  const handleWithoutFeedback = () => {
    Keyboard.dismiss();
  };
  const handleNextSignUp = () => {
    dispatch(addUserSignin(userSignin));
    navigation.navigate('SignUpPassword');
  };
  const handleChangeUsername = (value) => {
    setUserSignin(value);
  };
  return (
    <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
      <View style={StyleSignUpName.viewContainer}>
        <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelHeader]}>What's your username?</Text>
        <View style={StyleSignUpName.addressContainer}>
          <TextInput
            onChangeText={(value) => handleChangeUsername(value)}
            value={userSignin} placeholder={'Username'}
            style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInputAddress]}
            autoFocus />
        </View>
        {
          userSignin && (
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
SignUpUserSignin.navigationOptions = {
  title: 'Username',
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#000',
};

export default SignUpUserSignin;