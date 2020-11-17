import React, { useState } from 'react';
import { Alert, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addUserPassword } from '../actions';
import StyleSignUpName from '../themes/StyleSignUpName';

const SignUpPassword = (props) => {
    const { navigation } = props;
    const { route } = props;
    const dispatch = useDispatch();
    const userPasswordRedux = useSelector(state => state.sign.userPassword);
    const [userPassword, setUserPassword] = useState(userPasswordRedux);
    const [enterpassword, setEnterassword] = useState('');

    const handleWithoutFeedback = () => {
        Keyboard.dismiss();
    };
    const handleNextSignUp = () => {
        if (userPassword === enterpassword) {
            dispatch(addUserPassword(userPassword))
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
        setUserPassword(value);
    };
    const handleChangeEnterpassword = (value) => {
        setEnterassword(value);
    };
    return (
        <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
            <View style={StyleSignUpName.viewContainer}>
                <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelHeader]}>What's your password?</Text>
                <View style={StyleSignUpName.addressContainer}>
                    <TextInput
                        onChangeText={(value) => handleChangePassword(value)}
                        value={userPassword} placeholder={'Password'}
                        style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInputAddress]}
                        autoFocus
                        secureTextEntry></TextInput>
                </View>
                <View style={StyleSignUpName.addressContainer}>
                    <TextInput
                        onChangeText={(value) => handleChangeEnterpassword(value)}
                        value={enterpassword} placeholder={'Enter password'}
                        style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInputAddress]}
                        secureTextEntry></TextInput>
                </View>
                {
                    userPassword && enterpassword && (
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