import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native';
import StyleSignUpName from '../themes/StyleSignUpName';

const SignUpPassword = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { signupProfile } = route.params;

    const [password, setPassword] = useState('');
    const [enterpassword, setEnterassword] = useState('');

    useEffect(() => {
        console.log(signupProfile);
    },[password]);

    const handleWithoutFeedback = () => {
        Keyboard.dismiss();
    };
    const handleNextSignUp = () => {
        if (password === enterpassword) {
            navigation.navigate('SignUpName');
            return;
        }
        Alert.alert(
            "Opps",
            "Mật khẩu không khớp",
            [
                { text: "OK" }
            ],
        );
    };
    const handleChangePassword = (value) => {
        setPassword(value);
        signupProfile.userPassword = value;
    };
    const handleChangeEnterpassword = (value) => {
        setEnterassword(value);
    };
    return (
        <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
            <View style={StyleSignUpName.viewContainer}>
                <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelHeader]}>What's your password?</Text>
                <View style={StyleSignUpName.addressContainer}>
                    <TextInput onChangeText={(value) => handleChangePassword(value)} value={password} placeholder={'Password'} style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInputAddress]} autoFocus secureTextEntry></TextInput>
                </View>
                <View style={StyleSignUpName.addressContainer}>
                    <TextInput onChangeText={(value) => handleChangeEnterpassword(value)} value={enterpassword} placeholder={'Enter password'} style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInputAddress]} secureTextEntry></TextInput>
                </View>
                {
                    password && enterpassword && (
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
SignUpPassword.navigationOptions = {
    title: 'Password',
    headerStyle: {
        backgroundColor: '#fff',
    },
    headerTintColor: '#000',
};

export default SignUpPassword;