import React, { useCallback, useState, useEffect } from 'react';
import { RefreshControl, ScrollView, View, Modal, TouchableOpacity, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PostNewFeedItem from '../components/PostNewFeedItem';
import StyleNewFeed from '../themes/StyleNewFeed';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, deletePost } from '../api/Post';

const NewFeed = (props) => {
    const dispatch = useDispatch();
    const profileRedux = useSelector(state => state.profile);
    const tokenRedux = useSelector(state => state.token);
    const { navigation } = props;

    const [modalVisible, setModalVisible] = useState(false);
    const [postIDModal, setPostIDModal] = useState(null);
    const handlerVisible = (value) => {
        if (value) {
            setPostIDModal(value);
        }
        setModalVisible(!modalVisible);
    }

    const [posts, setPosts] = useState([]);

    const handlerGetPost = async () => {
        const dataResponse = await getPost({
            start: 0,
            limit: 5,
        });
        if (dataResponse && dataResponse.successGet == true) {
            setPosts(dataResponse.posts);
        } else {
            console.log("Lỗi hệ thống");
        }
    }


    useEffect(() => {
        handlerGetPost();

        return;
    }, []);



    // const wait = (timeout) => {
    //     return new Promise(resolve => {
    //         setTimeout(resolve, timeout);
    //     });
    // };
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        handlerGetPost().then(() => setRefreshing(false));
    }, []);

    const handleGotoComment = (value) => {
        navigation.navigate('Comment', value);
    }
    const handleDeletePost = () => {
        Alert.alert(
            'Thông báo',
            'Bạn có chắc chắn muốn xoá bài viết này?',
            [
                {
                    text: 'Không',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Đồng ý',
                    onPress: async () => {
                        const dataResponse = await deletePost({
                            postID: postIDModal,
                        });
                        console.log(dataResponse);
                        if(dataResponse && dataResponse.successDelete == true){
                            setModalVisible(!modalVisible);
                            handlerGetPost();
                        } else {
                            console.log("Lỗi hệ thống");
                        }
                    }
                }
            ],
            { cancelable: false }
        );
    }
    return (
        <ScrollView
            style={StyleNewFeed.containerPostNewFeed}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['red', 'green', 'blue', 'orange']} />
            }
        >
            <Modal

                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <TouchableWithoutFeedback onPress={handlerVisible}>
                    <View style={StyleNewFeed.containerModal}>
                        <View style={StyleNewFeed.viewModal}>
                            <TouchableOpacity style={[StyleNewFeed.touchItemModel, StyleNewFeed.backgroundBlue]}>
                                <Text style={StyleNewFeed.textItemModel}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[StyleNewFeed.touchItemModel, StyleNewFeed.backgroundBlue]} onPress={handleDeletePost}>
                                <Text style={StyleNewFeed.textItemModel}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[StyleNewFeed.touchItemModel, StyleNewFeed.backgroundBlue]}>
                                <Text style={StyleNewFeed.textItemModel}>Report</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[StyleNewFeed.touchItemModel, StyleNewFeed.backgroundRed]} onPress={handlerVisible}>
                                <Text style={[StyleNewFeed.textItemModel, StyleNewFeed.textLight]}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </Modal>
            {
                posts.map(post => <PostNewFeedItem key={post.postID} post={post} handleCommentRequest={handleGotoComment} handlerVisible={handlerVisible} />)
            }
        </ScrollView>
    );
}

// NewFeed.navigationOptions = {
//     headerTitle: () => <HeaderNewFeed />
// };

export default NewFeed;