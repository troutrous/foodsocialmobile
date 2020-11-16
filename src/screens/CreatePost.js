import React from 'react';
import { Button, Keyboard, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../actions';

const CreatePost = (props) => {
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
            <Text>Haha CreatePost</Text>
            <Text>{counter}</Text>
            <Button title="+" onPress={() => dispatch(increment())}></Button>
            <Button title="-"></Button>
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