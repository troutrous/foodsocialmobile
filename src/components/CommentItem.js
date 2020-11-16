import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import StyleComment from '../themes/StyleComment';
import MaterialCommunityIcons from '../../node_modules/react-native-vector-icons/MaterialCommunityIcons';

export default CommentItem = (props) => {
    const {handleCommentRequest} = props;
    return (
        <View style={StyleComment.containerCommentItem}>
            <View style={StyleComment.viewAvatarComment}>
                <Image style={StyleComment.imageAvatarComment} source={{ uri: 'https://d2d0b2rxqzh1q5.cloudfront.net/sv/1.67/dir/6fa/image/6fa1d684b825ec681c8f2812c8d0334d.jpg' }} />
            </View>
            <View style={StyleComment.viewContentComment}>
                <View style={StyleComment.contentComment}>
                    <Text style={StyleComment.fontRegular}>
                        <Text style={StyleComment.fontBold}>Minh Chau</Text>
                        <Text>  </Text>
                        Just give some time, I'll be ready
                        Do my make-up, bathe in my perfume
                        Quick shower, won't take too long
                        I'll be done, just sing this song.
                        So, wrap me in plastic and make me shine
                        We can make a dollhouse, follow your design
                        Let's build a dog out of sticks and twine
                        I can call you master, you can call me mine.
                    </Text>
                </View>
                <View style={StyleComment.viewReactComment}>
                    <Text>50m</Text>
                    <TouchableOpacity style={StyleComment.buttonReactComment}>
                        <Text style={StyleComment.fontBold}>Vote</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleComment.buttonReactComment} onPress={() => handleCommentRequest()}>
                        <Text style={StyleComment.fontBold}>Reply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}