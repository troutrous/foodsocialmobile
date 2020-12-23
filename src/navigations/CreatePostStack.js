import React, {useLayoutEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateImage from '../screens/CreateImage';
import CreateContent from '../screens/CreateContent';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

const CreatePostStack = ({ navigation, route }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CreateImage" component={CreateImage} />
            <Stack.Screen name="CreateContent" component={CreateContent} />
        </Stack.Navigator>
    );
}

CreatePostStack.navigationOptions = {
    tabBarVisible: false,
};


export default CreatePostStack;