import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native';
import StyleSignUpName from '../themes/StyleSignUpName';
import { useDispatch, useSelector } from 'react-redux';
import { addSignupEmail } from '../actions';
import { checkExistProfileByEmail } from '../api/Sign';

const SignUpEmail = (props) => {
    const { navigation } = props;
    const { route } = props;
    const dispatch = useDispatch();
    const userEmailRedux = useSelector(state => state.sign.signupEmail);
    const [userEmail, setUserEmail] = useState(userEmailRedux);

    useEffect(() => {
        console.log(userEmailRedux);
    },[])

    const handleWithoutFeedback = () => {
        Keyboard.dismiss();
    };
    const handleChangeEmail = (value) => {
        setUserEmail(value);
    };
    const handleNextSignUp = async () => {
        const checkExist = await checkExistProfileByEmail(userEmail);
        if (!checkExist) {
            dispatch(addSignupEmail(userEmail));
            navigation.navigate('SignUpBOD');
        } else {
            Alert.alert(
                "Opps",
                "Rất tiếc tài khoản email này đã được sử dụng, vui lòng sử dụng email khác !",
                [
                    { text: "OK" }
                ],
            );
        }
    };
    return (
        <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
            <View style={StyleSignUpName.viewContainer}>
                <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelHeader]}>What's your email?</Text>
                <View style={StyleSignUpName.addressContainer}>
                    <TextInput
                        onChangeText={(value) => handleChangeEmail(value)}
                        value={userEmail} placeholder={'Email'}
                        style={[StyleSignUpName.fontSemiBold, StyleSignUpName.textInputAddress]}
                        autoFocus
                        keyboardType={'email-address'}>
                    </TextInput>
                </View>
                {
                    userEmail && (
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