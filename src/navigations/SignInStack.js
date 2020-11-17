import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import NewFeed from '../screens/NewFeed';
import SignUpStack from '../navigations/SignUpStack';


const Stack = createStackNavigator();

const SignInStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} options={SignIn.navigationOptions} />
            <Stack.Screen name="SignUpStack" component={SignUpStack} options={SignUpStack.navigationOptions} />
        </Stack.Navigator>
    );
}

SignInStack.navigationOptions = {
    headerShown: false,
};


export default SignInStack;