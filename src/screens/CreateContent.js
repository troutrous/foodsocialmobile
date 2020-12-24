import React, { useCallback, useState, useEffect } from 'react';
import { Image, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HeaderCreateContent from '../components/HeaderCreateContent';
import StyleCreatePost from '../themes/StyleCreatePost';

const CreateContent = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { imageBase64 } = route.params;

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // do something
            navigation.setOptions({ headerShown: true, headerLeft: null, headerTitle: () => <HeaderCreateContent handleGoBack={handleGoBack} handleGotoCreateContent={handleGotoCreateContent} /> });
        });

        return unsubscribe;
    }, [navigation]);

    const handleGotoCreateContent = () => {
        navigation.goBack();
        navigation.navigate('NewFeed');
    }
    const handleGoBack = () => {
        navigation.goBack();
    }
    const handleWithoutFeedback = () => {
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress={handleWithoutFeedback}>
            <View style={StyleCreatePost.containerScreen}>
                <View style={StyleCreatePost.inputViewContent}>
                    <TextInput placeholder={"Write something here..."} style={StyleCreatePost.inputContent} multiline={true}
                        underlineColorAndroid='transparent'></TextInput>
                </View>
                {
                    imageBase64 && (
                        <View style={StyleCreatePost.imageViewContent}>
                            <Image style={StyleCreatePost.imageContent} source={{ uri: `data:image/png;base64,${imageBase64}` }} />
                        </View>
                    )
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

// NewFeed.navigationOptions = {
//     headerTitle: () => <HeaderNewFeed />
// };

CreateContent.navigationOptions = {
    headerShown: true,
    headerTitle: () => <HeaderCreatePost />
}

export default CreateContent;