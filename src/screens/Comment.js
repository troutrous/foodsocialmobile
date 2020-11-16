import React, { useEffect, useRef } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CommentItem from '../components/CommentItem';
import StyleComment from '../themes/StyleComment';

const Comment = props => {
    const {navigation} = props;
    const {route} = props;
    const inputComment = useRef(null);
    const handleFocusInputComment = () => {
        inputComment.current.focus();
    }
    useEffect(()=>{
        if(route.params && route.params.focusRequired) {
            inputComment.current.focus();
        }
    }, [])
    return(
        <View style={StyleComment.containerScreen}>
            <View style={StyleComment.containerViewListComment}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <CommentItem handleCommentRequest={handleFocusInputComment}/>
                    <CommentItem handleCommentRequest={handleFocusInputComment}/>
                    <CommentItem handleCommentRequest={handleFocusInputComment}/>
                    <CommentItem handleCommentRequest={handleFocusInputComment}/>
                    <CommentItem handleCommentRequest={handleFocusInputComment}/>
                </ScrollView>
            </View>
            <View style={StyleComment.containerTextInputComment}>
                <TextInput style={StyleComment.textInputComment} placeholder={"Write a comment..."} focus={true} ref={inputComment}/>
                <TouchableOpacity style={StyleComment.buttonSendComment}>
                    <Feather name={"send"} size={26} color="#000"/>
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