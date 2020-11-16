import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../actions';

const Notification = (props) => {
    const { navigation } = props;
    const { route } = props;

    const counter = useSelector(state => state.counter);

    const handleWithoutFeedback = () => {
        Keyboard.dismiss();
    };
    const handleNextSignUp = () => {
        navigation.navigate('SignUpPhone');
    };
    const handleChangeAddress = (value) => {
        setAddress(value);
    };
    const dispatch = useDispatch();
    return (
        <View>
            <Text>Haha notifications</Text>
            <Text>{counter}</Text>
            <Button title="+" onPress={() => dispatch(increment())}></Button>
            <Button title="-"></Button>
        </View>
    )
};

Notification.navigationOptions = {
    title: 'Notification',
    headerStyle: {
        backgroundColor: '#ff727d',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
};

export default Notification;