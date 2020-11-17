import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addUserFirstname, addUserLastname } from '../actions';
import StyleSignUpName from '../themes/StyleSignUpName';

const SignUpName = (props) => {
  const { navigation } = props;
  const { route } = props;
  const dispatch = useDispatch();
  const userFirstnameRedux = useSelector(state => state.sign.userFirstname);
  const userLastnameRedux = useSelector(state => state.sign.userLastname);
  const [userFistname, setUserFistname] = useState(userFirstnameRedux);
  const [userLastname, setUserLastname] = useState(userLastnameRedux);

  const handleWithoutFeedback = () => {
    Keyboard.dismiss();
  };
  const handleNextSignUp = () => {
    dispatch(addUserFirstname(userFistname));
    dispatch(addUserLastname(userLastname));
    navigation.navigate('SignUpEmail');
  };
  const handleChangeFirstName = (value) => {
    setUserFistname(value);
  };
  const handleChangeLastName = (value) => {
    setUserLastname(value);
  };
  return (
    <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
      <View style={StyleSignUpName.viewContainer}>
        <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelHeader]}>What's your name?</Text>
        <View style={StyleSignUpName.nameContainer}>
          <TextInput
            onChangeText={(value) => handleChangeFirstName(value)}
            value={userFistname} placeholder={'First Name'}
            style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInput]}
            autoFocus ></TextInput>
          <TextInput onChangeText={(value) => handleChangeLastName(value)}
            value={userLastname} placeholder={'Last Name'}
            style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInput]}></TextInput>
        </View>
        {
          userFistname.length && userLastname.length && (
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