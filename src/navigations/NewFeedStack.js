import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeedBottomTab from '../navigations/FeedBottomTab';
import SignInStack from '../navigations/SignInStack';
import Comment from '../screens/Comment';
import PostItem from '../screens/PostItem';
import { getToken, getProfile } from '../commons/Storage';
import { addToken, addProfile } from '../actions';

const Stack = createStackNavigator();

const NewFeedStack = (props) => {
    const dispatch = useDispatch();
    const navigationRef = useRef(null);
    const initialState = async () => {
        const [token, profile] = await Promise.all([getToken(), getProfile()]);
        if (token && profile) {
            dispatch(addToken(token));
            dispatch(addProfile(profile));
            navigationRef.current?.navigate('FeedBottomTab');
        }
    }
    useEffect(() => {
        initialState();

        return;
    }, [])
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name="SignInStack" component={SignInStack} options={SignInStack.navigationOptions} />
                <Stack.Screen name="FeedBottomTab" component={FeedBottomTab} options={FeedBottomTab.navigationOptions} />
                <Stack.Screen name="PostItem" component={PostItem} options={PostItem.navigationOptions} />
                <Stack.Screen name="Comment" component={Comment} options={Comment.navigationOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
NewFeedStack.navigationOptions = {

};
export default NewFeedStack;