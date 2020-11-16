import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import StyleProfile from '../themes/StyleProfile';

export default PostProfileItem = (props) => {
    const {handleGotoPost} = props;
    return (
        <TouchableOpacity onPress={() => handleGotoPost()} style={StyleProfile.containerPostProfileItem}>
            <Image style={StyleProfile.imagePostProfileItem} source={{uri: 'https://images.pexels.com/photos/4734723/pexels-photo-4734723.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}}/>
        </TouchableOpacity>
    );
}