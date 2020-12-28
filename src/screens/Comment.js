import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CommentItem from '../components/CommentItem';
import StyleComment from '../themes/StyleComment';
import { getCommnentByPost, createComment } from '../api/Post';
import { useDispatch, useSelector } from 'react-redux';

const Comment = props => {
    const { navigation } = props;
    const { route } = props;
    const profileIDRedux = useSelector(state => state.profile.profileID);
    const [valComment, setValComment] = useState('');
    const [replyTo, setReplyTo] = useState(null);
    const inputComment = useRef(null);
    const handleFocusInputComment = (replyId) => {
        inputComment.current.focus();
        setReplyTo(replyId);
    }
    const handleOnBlur = () => {
        setReplyTo(null)
    }

    const [comments, setComments] = useState([]);


    const handleGetComment = async () => {
        const dataResponse = await getCommnentByPost({
            postID: route.params.postID
        })
        if (dataResponse.successGet) {
            setComments(dataResponse.comments);
        } else {
            console.log("Lỗi hệ thống")
        }
    }

    const handleCreateComment = async () => {
        const dataResponse = await createComment({
            userID: profileIDRedux,
            commentText: valComment,
            postID: route.params.postID,
            commentParentID: replyTo,
        });
        if (dataResponse.successCreate) {
            setReplyTo(null);
            setValComment('');
            handleGetComment();
        } else {
            console.log('Lỗi hệ thống');
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
                    {
                        comments.map(comment => <CommentItem key={comment.commentID} comment={comment} handleCommentRequest={handleFocusInputComment} />)
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
Comment.navigationOptions = {
    title: 'Comment',
    headerStyle: {
        backgroundColor: '#fff',
    },
    headerTintColor: '#000',
};

export default Comment;