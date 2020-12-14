import React, { useEffect, useState } from 'react';
import { AppRegistry, Button, Keyboard, Text, View, PermissionsAndroid, Platform, ScrollView, Image, TouchableOpacity } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
import CameraRoll from "@react-native-community/cameraroll";
import { RNCamera } from 'react-native-camera';
import StyleCreatePost from '../themes/StyleCreatePost';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

const tempbase64 = `iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=`

const CreatePost = (props) => {
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
            first: 20,
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