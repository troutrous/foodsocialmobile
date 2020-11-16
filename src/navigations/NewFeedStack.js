import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../actions/store';
import FeedBottomTab from '../navigations/FeedBottomTab';
import Comment from '../screens/Comment';
import PostItem from '../screens/PostItem';

const Stack = createStackNavigator();

const NewFeedStack = ({ navigation, route }) => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="FeedBottomTab" component={FeedBottomTab} options={FeedBottomTab.navigationOptions}/>
                    <Stack.Screen name="Comment" component={Comment} options={Comment.navigationOptions} />
                    <Stack.Screen name="PostItem" component={PostItem} options={PostItem.navigationOptions} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
NewFeedStack.navigationOptions = {

};
export default NewFeedStack;