import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native';
import StyleSignUpName from '../themes/StyleSignUpName';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SignUpEmail = (props) => {
    const { navigation } = props;
    const { route } = props;

    const [email, setEmail] = useState('');

    const handleWithoutFeedback = () => {
        Keyboard.dismiss();
    };
    const handleNextSignUp = async () => {
         fetch('http://192.168.1.16:3000/auth/checkexistprofilebyemail', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset = utf-8'
            },
            body: JSON.stringify({
                userSignin: email
            })
        })
            .then((response) => response.json())
            .then((dataResponse) => {
                !dataResponse.checkExistProfileByEmail ? navigation.navigate('SignUpBOD') :
                    Alert.alert(
                        "Opps",
                        "Tài khoản email của bạn đã được sử dụng",
                        [
                            { text: "OK"}
                        ],
                    );
            })
            .catch((err) => console.log(err));
            navigation.navigate('SignUpBOD');
    };
    const handleChangeEmail = (value) => {
        setEmail(value);
    };
    return (
        <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
            <View style={StyleSignUpName.viewContainer}>
                <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelHeader]}>What's your email?</Text>
                <View style={StyleSignUpName.addressContainer}>
                    <TextInput onChangeText={(value) => handleChangeEmail(value)} value={email} placeholder={'Email'} style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInputAddress]} autoFocus keyboardType={'email-address'}></TextInput>
                </View>
                {
                    email && (
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
SignUpEmail.navigationOptions = {
    title: 'Email',
    headerStyle: {
        backgroundColor: '#fff',
    },
    headerTintColor: '#000',
};

export default SignUpEmail;