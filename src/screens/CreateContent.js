import React, { useCallback, useState, useEffect } from 'react';
import { Image, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HeaderCreateContent from '../components/HeaderCreateContent';
import { useDispatch, useSelector } from 'react-redux';
import StyleCreatePost from '../themes/StyleCreatePost';
import { createPost } from '../api/Post';

const CreateContent = (props) => {
    const { navigation } = props;
    const { route } = props;
    const { imageuri } = route.params;


    const profileIDRedux = useSelector(state => state.profile.profileID);
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // do something
            navigation.setOptions({ headerShown: true, headerLeft: null, headerTitle: () => <HeaderCreateContent handleGoBack={handleGoBack} handleUpload={handleUpload} /> });
        });

        return unsubscribe;
    }, [navigation]);

    const [valContent, setValContent] = useState('');
    const [flagUpload, setFlagUpload] = useState(false);

    const handleGotoCreateContent = async () => {
        const imageForm = new FormData();
        imageForm.append('userID', profileIDRedux);
        if (valContent) imageForm.append('contentText', valContent);
        if (imageuri) imageForm.append('imageSource', {
            uri: imageuri,
            name: 'image.jpg',
            type: 'image/jpeg'
        });

        const dataResponse = await createPost(imageForm);
        if (dataResponse && dataResponse.successCreate) {
            setFlagUpload(false);
            navigation.goBack();
            navigation.navigate('NewFeed');
        } else {
            console.log("Lỗi hệ thống");
            setFlagUpload(false);
        }
    }

    let handleUpload = () => {
        setFlagUpload(true);
    }

    useEffect(() => {
        if (flagUpload == true) {
            handleGotoCreateContent();
        }
    }, [flagUpload])

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
                    <TextInput
                        placeholder={"Write something here..."}
                        style={StyleCreatePost.inputContent}
                        // multiline={true}
                        onChangeText={(value) => setValContent(value)}
                        value={valContent}
                    />
                </View>
                {
                    imageuri && (
                        <View style={StyleCreatePost.imageViewContent}>
                            <Image style={StyleCreatePost.imageContent} source={{ uri: imageuri }} />
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

// CreateContent.navigationOptions = {
//     headerShown: true,
//     headerTitle: () => <HeaderCreatePost />
// }

export default CreateContent;