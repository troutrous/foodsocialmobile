import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import StyleComment from '../themes/StyleComment';

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + "d";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + "h";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + "m";
    }
    return "Just now";
}

export default CommentItem = (props) => {
    const { handleCommentRequest } = props;
    const { comment } = props;
    return (
        <View style={StyleComment.containerCommentItem}>
            {
                comment && (
                    <View style={StyleComment.viewAvatarComment}>
                        <Image style={StyleComment.imageAvatarComment} source={{ uri: comment.imageSource }} />
                    </View>
                )
            }
            {
                comment && (
                    <View style={StyleComment.viewContentComment}>
                        <View>
                            <View style={StyleComment.contentComment}>
                                <Text style={StyleComment.fontRegular}>
                                    <Text style={StyleComment.fontBold}>{comment.userFirstname + ' ' + comment.userLastname}</Text>
                                    <Text>  </Text>
                                    {comment.commentText}
                                </Text>
                            </View>
                            <View style={StyleComment.viewReactComment}>
                                <Text>{timeSince(new Date(comment.commentCreatedAt.toString()))}</Text>
                                <TouchableOpacity style={StyleComment.buttonReactComment}>
                                    <Text style={StyleComment.fontBold}>Vote</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={StyleComment.buttonReactComment} onPress={() => handleCommentRequest(comment.commentParentID)}>
                                    <Text style={StyleComment.fontBold}>Reply</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {
                            comment.replys.map(reply =>
                                <View key={reply.commentID} style={StyleComment.containerCommentItem}>
                                    <View style={StyleComment.viewAvatarComment}>
                                        <Image style={StyleComment.imageAvatarComment} source={{ uri: reply.imageSource }} />
                                    </View>
                                    <View style={StyleComment.viewContentComment}>
                                        <View style={StyleComment.contentComment}>
                                            <Text style={StyleComment.fontRegular}>
                                                <Text style={StyleComment.fontBold}>{reply.userFirstname + ' ' + reply.userLastname}</Text>
                                                <Text>  </Text>
                                                {reply.commentText}
                                            </Text>
                                        </View>
                                        <View style={StyleComment.viewReactComment}>
                                            <Text>{timeSince(new Date(reply.commentCreatedAt.toString()))}</Text>
                                            <TouchableOpacity style={StyleComment.buttonReactComment}>
                                                <Text style={StyleComment.fontBold}>Vote</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={StyleComment.buttonReactComment} onPress={() => handleCommentRequest(reply.commentParentID)}>
                                                <Text style={StyleComment.fontBold}>Reply</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                    </View>
                )
            }


        </View>
    );
}