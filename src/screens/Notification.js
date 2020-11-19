import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NotificationItem from '../components/NotificationItem';
import StyleNotification from '../themes/StyleNotification';

// import { useSelector, useDispatch } from 'react-redux';
// import { increment } from '../actions';

const Notification = (props) => {
    const { navigation } = props;
    const { route } = props;
    // const dispatch = useDispatch();


    return (
        <View style={StyleNotification.containerScreen}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
            </ScrollView>
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