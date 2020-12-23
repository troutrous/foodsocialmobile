import React, { useEffect, useState } from 'react';
import { AppRegistry, Button, Keyboard, Text, View, PermissionsAndroid, Platform, ScrollView, Image, TouchableOpacity } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
import CameraRoll from "@react-native-community/cameraroll";
import { RNCamera } from 'react-native-camera';
import StyleCreatePost from '../themes/StyleCreatePost';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderCreateImage from '../components/HeaderCreateImage';

async function hasStoragePermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
        return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
}

const PendingView = () => (
    <View style={StyleCreatePost.pendingView} />
);

const CreateImage = (props) => {
    const { navigation } = props;
    const { route } = props;
    // const dispatch = useDispatch();

    const [photos, setPhotos] = useState([]);
    const [onCamera, setOnCamera] = useState(false);
    const [encodedBase64, setEncodedBase64] = useState(null);

    const getPhotos = async () => {
        if (Platform.OS === "android" && !(await hasStoragePermission())) {
            return;
        }
        CameraRoll.getPhotos({
            first: 21,
        }).then((photoedges) => {
            setPhotos([...photoedges.edges]);
        }).catch((err) => {
            //Error Loading Images
            console.log(err);
        });
    };
    useEffect(() => {
        getPhotos();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // do something
            navigation.setOptions({ headerShown: true, headerTitle: () => <HeaderCreateImage handleGotoCreateContent={handleGotoCreateContent} handleGoBack={handleGoBack}/> });
        });

        return unsubscribe;
    }, [navigation]);

    const handleGotoCreateContent = () => {
        navigation.navigate('CreateContent');
    }
    const handleGoBack = () => {
        navigation.goBack();
    }

    const takePicture = async function (camera) {
        const options = { quality: 1, base64: true, flashMode: false, doNotSave: true };
        const data = await camera.takePictureAsync(options);
        setEncodedBase64(data.base64);
        //  eslint-disable-next-line
    };

    const handleChoosePhoto = (uri) => {

    }
    return (
        <View style={StyleCreatePost.containerScreen}>
            {
                encodedBase64 && (<Image style={StyleCreatePost.imagePreview} source={{ uri: `data:image/png;base64,${encodedBase64}` }} />) ||
                (
                    <View style={StyleCreatePost.viewScrollContainer}>
                        {
                            onCamera && (
                                <RNCamera
                                    style={StyleCreatePost.preview}
                                    type={RNCamera.Constants.Type.back}
                                    flashMode={RNCamera.Constants.FlashMode.auto}
                                    autoFocus={RNCamera.Constants.AutoFocus.on}
                                    type={RNCamera.Constants.Type.back}
                                    useNativeZoom={true}

                                    androidCameraPermissionOptions={{
                                        title: 'Permission to use camera',
                                        message: 'We need your permission to use your camera',
                                        buttonPositive: 'Ok',
                                        buttonNegative: 'Cancel',
                                    }}
                                    androidRecordAudioPermissionOptions={{
                                        title: 'Permission to use audio recording',
                                        message: 'We need your permission to use your audio',
                                        buttonPositive: 'Ok',
                                        buttonNegative: 'Cancel',
                                    }}
                                >
                                    {({ camera, status, recordAudioPermissionStatus }) => {
                                        if (status !== 'READY') return <PendingView />;
                                        return (
                                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                                <TouchableOpacity onPress={() => takePicture(camera)} style={StyleCreatePost.capture}>
                                                    <MaterialIcons name={'motion-photos-on'} size={80} style={StyleCreatePost.iconCapture} />
                                                </TouchableOpacity>
                                            </View>
                                        );
                                    }}
                                </RNCamera>) || (
                                <ScrollView>
                                    <View style={StyleCreatePost.viewContentImage}>
                                        {
                                            photos.map((photo, index) => {
                                                return (
                                                    <TouchableOpacity key={index} style={StyleCreatePost.viewItemContentImage} onPress={() => handleChoosePhoto(photo.node.image.uri)}>
                                                        <Image
                                                            style={StyleCreatePost.imageItemContentImage}
                                                            source={{ uri: photo.node.image.uri }}
                                                        />
                                                    </TouchableOpacity>)
                                            })
                                        }
                                    </View>
                                </ScrollView>
                            )
                        }
                        <View style={StyleCreatePost.viewFooter}>
                            <TouchableOpacity style={StyleCreatePost.viewItemFooter} onPress={() => setOnCamera(false)}>
                                <Text style={[StyleCreatePost.textItemFooter, StyleCreatePost.fontBold]}>Gallery</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleCreatePost.viewItemFooter} onPress={() => setOnCamera(true)}>
                                <Text style={[StyleCreatePost.textItemFooter, StyleCreatePost.fontBold]}>Camera</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </View>


    )
};

// CreateImage.navigationOptions = ({ navigation }) => ({
//     headerShown: true,
//     headerTitle: () => <HeaderCreatePost navigation={navigation} />,
// })

export default CreateImage;