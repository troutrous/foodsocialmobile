import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import StyleProfile from '../themes/StyleProfile';

export default PostProfileItem = (props) => {
    const { handleGotoPost } = props;
    const { post } = props;
    return (
        <TouchableOpacity onPress={() => handleGotoPost(post)} style={StyleProfile.containerPostProfileItem}>
            <Image style={StyleProfile.imagePostProfileItem} source={{ uri: post.image[0].imageSource }} />
        </TouchableOpacity>
    );
}