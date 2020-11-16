import React, {useLayoutEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

const ProfileStack = ({navigation, route}) => {
    // useLayoutEffect(()=>{
    //     if( getFocusedRouteNameFromRoute(route) == "Comment") {
    //         navigation.setOptions({tabBarVisible:false});
    //     } else {
    //         navigation.setOptions({tabBarVisible:true})
    //     }
    // })
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={Profile.navigationOptions} />
        </Stack.Navigator>
    );
}
export default ProfileStack;