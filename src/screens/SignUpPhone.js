import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native';
import StyleSignUpName from '../themes/StyleSignUpName';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { addSignupPhone, addProfile, addToken } from '../actions';
import { signUp } from '../api/Sign';

const SignUpPhone = (props) => {
  const { navigation } = props;
  const { route } = props;
  const dispatch = useDispatch();
  const userPhonesRedux = useSelector(state => state.sign.signupPhone);
  const signRedux = useSelector(state => state.sign);

  const [isFinished, setIsFinished] = useState(false);
  const [userPhone, setUserPhone] = useState(userPhonesRedux);

  const handleWithoutFeedback = () => {
    Keyboard.dismiss();
  };
  const handleNextSignUp = () => {
    dispatch(addSignupPhone(userPhone));
    setIsFinished(true);
  };
  const handleChangePhone = (value) => {
    setUserPhone(value);
  };
  const handleSignUp = async () => {
    const dataResponse = await signUp({
      userSignin: signRedux.signupSignin,
      userPassword: signRedux.signupPassword,
      userFirstname: signRedux.signupFirstname,
      userLastname: signRedux.signupLastname,
      userGender: signRedux.signupEmail,
      userEmail: signRedux.userBOD,
      userGender: signRedux.signupGender,
      userAddress: signRedux.signupAddress,
      userPhone: signRedux.signupPhone,
      typeprofileID: signRedux.signupTypeProfile,
    });
    if (dataResponse.successSignup == true) {
      dispatch(addProfile(dataResponse));
      dispatch(addToken(dataResponse.token));
      navigation.navigate('FeedBottomTab', { screen: 'NewFeed' });
    } else if (ataResponse.successSignup == false) {
      Alert.alert(
        'Thông báo',
        'Thất bại'
      );
    }
  }

  useEffect(() => {
    if (isFinished) {
      handleSignUp();
    }
  }, [signRedux]);

  return (
    <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
      <View style={StyleSignUpName.viewContainer}>
        <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelHeader]}>What's your phone?</Text>
        <View style={StyleSignUpName.addressContainer}>
          <TextInput
            onChangeText={(value) => handleChangePhone(value)}
            value={userPhone}
            placeholder={'Number phone'} style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInputAddress]}
            autoFocus
            keyboardType={'numeric'}></TextInput>
        </View>
        {
          userPhone && (
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