import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, ScrollView, Keyboard, TouchableOpacity, Button } from 'react-native';
import PostNewFeedItem from '../components/PostNewFeedItem'
import Feather from 'react-native-vector-icons/Feather';
import StyleComment from '../themes/StyleComment';
import CommentItem from '../components/CommentItem';

const PostItem = (props) => {
    const { navigation } = props;
    const { route } = props;

    const inputComment = useRef(null);

    const handleFocusInputComment = () => {
        inputComment.current.focus();
    }

    return (
        <View style={StyleComment.containerScreen}>
            <View style={StyleComment.containerViewListComment}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <PostNewFeedItem handleCommentRequest = {handleFocusInputComment}/>
                    <CommentItem handleCommentRequest = {handleFocusInputComment} />
                    <CommentItem handleCommentRequest = {handleFocusInputComment} />
                    <CommentItem handleCommentRequest = {handleFocusInputComment} />
                    <CommentItem handleCommentRequest = {handleFocusInputComment} />
                    <CommentItem handleCommentRequest = {handleFocusInputComment} />
                </ScrollView>
            </View>
            <View style={StyleComment.containerTextInputComment}>
                <TextInput style={StyleComment.textInputComment} placeholder={"Write a comment..."} ref={inputComment} />
                <TouchableOpacity style={StyleComment.buttonSendComment}>
                    <Feather name={"send"} size={26} color="#000"/>
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