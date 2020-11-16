import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, TouchableHighlight } from 'react-native';
import StyleSignUpName from '../themes/StyleSignUpName';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignUpGender = (props) => {
    const { navigation } = props;
    const { route } = props;

    const [gender, setGender] = useState('');

    const handleWithoutFeedback = () => {
        Keyboard.dismiss();
    };
    const handleNextSignUp = () => {
        navigation.navigate('SignUpAddress');
    };
    const handleOptionMale = () => {
        setGender('Male');
    };
    const handleOptionFemale = () => {
        setGender('Female');
    };
    return (
        <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
            <View style={StyleSignUpName.viewContainer}>
                <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelHeader]}>What's your name?</Text>
                <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelsubHeader]}>You can change who sees your gender on your profile later.</Text>
                <View style={StyleSignUpName.genderContainer}>
                    <TouchableWithoutFeedback onPress={handleOptionMale}>
                        <View style={StyleSignUpName.optionsContainer}>
                            <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelOptions]}>Male</Text>
                            {
                                gender === "Male" && (<MaterialIcons name='radio-button-on' size={18} color='#23156a' />) || <MaterialIcons name='radio-button-off' size={18} color='#6b6b6b' />
                            }
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={handleOptionFemale}>
                        <View style={StyleSignUpName.optionsContainer}>
                            <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelOptions]}>Female</Text>
                            {
                                gender === "Female" && (<MaterialIcons name='radio-button-on' size={18} color='#23156a' />) || <MaterialIcons name='radio-button-off' size={18} color='#6b6b6b' />
                            }
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {
                    gender && (
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
SignUpGender.navigationOptions = {
    title: 'Gender',
    headerStyle: {
        backgroundColor: '#fff',
    },
    headerTintColor: '#000',
};

export default SignUpGender;