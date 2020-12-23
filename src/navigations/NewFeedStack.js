import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useLayoutEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../actions/store';
import FeedBottomTab from '../navigations/FeedBottomTab';
import CreatePostStack from '../navigations/CreatePostStack';
import SignInStack from '../navigations/SignInStack';
import Comment from '../screens/Comment';
import PostItem from '../screens/PostItem';

const Stack = createStackNavigator();

const NewFeedStack = ({ navigation, route }) => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen name="SignInStack" component={SignInStack} options={SignInStack.navigationOptions} /> */}
                    <Stack.Screen name="FeedBottomTab" component={FeedBottomTab} options={FeedBottomTab.navigationOptions} />
                    <Stack.Screen name="PostItem" component={PostItem} options={PostItem.navigationOptions} />
                    <Stack.Screen name="Comment" component={Comment} options={Comment.navigationOptions} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
NewFeedStack.navigationOptions = {

};
export default NewFeedStack;