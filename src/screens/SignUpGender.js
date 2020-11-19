import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, TouchableHighlight } from 'react-native';
import StyleSignUpName from '../themes/StyleSignUpName';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addUserGender } from '../actions';

const SignUpGender = (props) => {
    const { navigation } = props;
    const { route } = props;
    const dispatch = useDispatch();
    const userGenderRedux = useSelector(state => state.sign.userGender);
    const [userGender, setUserGender] = useState(userGenderRedux);

    const handleWithoutFeedback = () => {
        Keyboard.dismiss();
    };
    const handleNextSignUp = () => {
        dispatch(addUserGender(userGender));
        navigation.navigate('SignUpAddress');
    };
    const handleOptionMale = () => {
        setUserGender(0);
    };
    const handleOptionFemale = () => {
        setUserGender(1);
    };
    useEffect(() => {
        Keyboard.dismiss();
      }, []);
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
                                userGender === 0 && (<MaterialIcons name='radio-button-on' size={18} color='#23156a' />) || <MaterialIcons name='radio-button-off' size={18} color='#6b6b6b' />
                            }
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={handleOptionFemale}>
                        <View style={StyleSignUpName.optionsContainer}>
                            <Text style={[StyleSignUpName.fontSemiBold, StyleSignUpName.labelOptions]}>Female</Text>
                            {
                                userGender === 1 && (<MaterialIcons name='radio-button-on' size={18} color='#23156a' />) || <MaterialIcons name='radio-button-off' size={18} color='#6b6b6b' />
                            }
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {
                    userGender != null && (
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