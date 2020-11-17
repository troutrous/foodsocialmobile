import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import CreatePost from '../screens/CreatePost';
import NewFeed from '../screens/NewFeed';
import HeaderNewFeed from '../components/HeaderNewFeed';
import HeaderProfile from '../components/HeaderProfile';

const Tab = createBottomTabNavigator();

const FeedBottomTab = ({ navigation, route }) => {
    useLayoutEffect(() => {
        if (getFocusedRouteNameFromRoute(route) == "NewFeed") {
            navigation.setOptions({ headerTitle: () => <HeaderNewFeed /> });
        }
        else {
            navigation.setOptions({ headerTitle: () => <HeaderProfile /> });
        }
    })
    useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: () => <HeaderNewFeed /> });
    }, [])
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "NewFeed") {
                        iconName = focused ? 'card-text' : 'card-text-outline';
                    } else if (route.name === "Profile") {
                        iconName = focused ? 'account' : 'account-outline';

                    } else if (route.name === "Search") {
                        iconName = focused ? 'feature-search' : 'feature-search-outline';
                    } else if (route.name === "CreatePost") {
                        iconName = focused ? 'looks' : 'looks';
                    } else if (route.name === "Notification") {
                        iconName = focused ? 'star' : 'staro';
                        return <AntDesign name={iconName} size={size - 2} color={color} />;
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                headerTitle: () => <HeaderNewFeed />
            })}
            tabBarOptions={{
                activeTintColor: '#23156a',
                inactiveTintColor: '#000',
                showLabel: false,
                keyboardHidesTabBar: true,
            }}
        >
            <Tab.Screen name="NewFeed" component={NewFeed} options={NewFeed.navigationOptions} />
            <Tab.Screen name="Search" component={Search} options={Search.navigationOptions} />
            <Tab.Screen name="CreatePost" component={CreatePost} options={CreatePost.navigationOptions} />
            <Tab.Screen name="Notification" component={Notification} options={Notification.navigationOptions} />
            <Tab.Screen name="Profile" component={Profile} options={Profile.navigationOptions} />
        </Tab.Navigator>
    );
}
FeedBottomTab.navigationOptions = {

}
export default FeedBottomTab;