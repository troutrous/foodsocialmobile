import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, ScrollView, Keyboard, TouchableOpacity, Button } from 'react-native';
import PostNewFeedItem from '../components/PostNewFeedItem'
import Feather from 'react-native-vector-icons/Feather';
import StyleComment from '../themes/StyleComment';
import CommentItem from '../components/CommentItem';
import { getCommnentByPost, createComment } from '../api/Post';
import { useDispatch, useSelector } from 'react-redux';

const PostItem = (props) => {
    const { navigation } = props;
    const { route } = props;
    const profileIDRedux = useSelector(state => state.profile.profileID);
    const { post } = route.params;
    const [valComment, setValComment] = useState('');
    const [replyTo, setReplyTo] = useState(null);
    const inputComment = useRef(null);

    const [comments, setComments] = useState([]);

    const handleFocusInputComment = (replyId) => {
        inputComment.current.focus();
        setReplyTo(replyId);
    }
    const handleOnBlur = () => {
        setReplyTo(null)
    }

    const handleCreateComment = async () => {
        const dataResponse = await createComment({
            userID: profileIDRedux,
            commentText: valComment,
            postID: post.postID,
            commentParentID: replyTo,
        });
        if (dataResponse.successCreate) {
            setReplyTo(null);
            setValComment('');
            handleGetComment();
            inputComment.current.blur();
        } else {
            console.log('Lỗi hệ thống');
        }
    }

    const handleGetComment = async () => {
        const dataResponse = await getCommnentByPost({
            postID: post.postID
        })
        if (dataResponse.successGet) {
            setComments(dataResponse.comments);
        } else {
            console.log("Lỗi hệ thống")
        }
    }

    useEffect(() => {
        if (route.params && route.params.focusRequired) {
            inputComment.current.focus();
        }
        handleGetComment();

        return;
    }, []);
    return (
        <View style={StyleComment.containerScreen}>
            <View style={StyleComment.containerViewListComment}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <PostNewFeedItem handleCommentRequest={handleFocusInputComment} post={post} />
                    {
                        comments.map(comment => <CommentItem key={comment.commentID} handleCommentRequest={handleFocusInputComment} comment={comment} />)
                    }
                </ScrollView>
            </View>
            <View style={StyleComment.containerTextInputComment}>
                <TextInput
                    style={StyleComment.textInputComment}
                    placeholder={"Write a comment..."}
                    focus={true} ref={inputComment}
                    value={valComment}
                    onChangeText={(value) => setValComment(value)}
                    onBlur={() => handleOnBlur()} />
                <TouchableOpacity style={StyleComment.buttonSendComment} onPress={handleCreateComment}>
                    <Feather name={"send"} size={26} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    )
};

PostItem.navigationOptions = {
    title: 'Post',
    headerStyle: {
        backgroundColor: '#fff',
    },
    headerTintColor: '#000',
    headerTitleStyle: {

    }
};

export default PostItem;