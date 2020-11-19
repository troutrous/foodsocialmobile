import React from 'react';
import { Button, Keyboard, Text, View } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';

const CreatePost = (props) => {
    const { navigation } = props;
    const { route } = props;
    // const dispatch = useDispatch();
    return (
        <View>
        
        </View>
    )
};

CreatePost.navigationOptions = {
    title: 'CreatePost',
    headerStyle: {
        backgroundColor: '#ff727d',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
};

export default CreatePost;