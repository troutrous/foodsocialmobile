import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { useDispatch, useSelector } from 'react-redux';
import { addSignupBOD } from '../actions';

import StyleSignUpName from '../themes/StyleSignUpName';

const SignUpBOD = (props) => {
  const { navigation } = props;
  const { route } = props;
  const dispatch = useDispatch();
  const userBODRedux = useSelector(state => state.sign.signupBOD);
  const [userBOD, setUserBOD] = useState(new Date(userBODRedux));
  const handleOnDateChange = (value) => {
    setUserBOD(value);
  }
  const handleNextSignUp = () => {
    dispatch(addSignupBOD(userBOD.toJSON().slice(0, 10)));
    navigation.navigate('SignUpGender');
  };
  const handleWithoutFeedback = () => {
    Keyboard.dismiss();
  };
  useEffect(() => {
    Keyboard.dismiss();
  }, []);
  return (
    <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
      <View style={StyleSignUpName.viewContainer}>
        <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelHeader]}>What's your name?</Text>
        <DatePicker
          date={userBOD}
          onDateChange={(value) => handleOnDateChange(value)}
          androidVariant={'nativeAndroid'}
          mode={'date'}
          textColor={'#000000'}
          maximumDate={new Date()}
        />
        {
          ((Math.abs(userBOD - new Date())) / (1000 * 60 * 60 * 24) >= 365 * 12)
          && (
            <TouchableOpacity style={StyleSignUpName.buttonNext} onPress={handleNextSignUp}>
              <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textButtonNext]}>Next</Text>
            </TouchableOpacity>)
          || (
            <TouchableOpacity style={[StyleSignUpName.buttonNext, StyleSignUpName.buttonNextDisabled]} disabled={true}>
              <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textButtonNext]}>Next</Text>
            </TouchableOpacity>
          )
        }

      </View>
    </TouchableWithoutFeedback>

  );
};

SignUpBOD.navigationOptions = {
  title: 'Birthday',
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#000',
};

export default SignUpBOD