import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import StyleProfile from '../themes/StyleProfile';
import Ionicons from '../../node_modules/react-native-vector-icons/Ionicons';

export default CardProfile = (props) => {
    return(
        <View style={StyleProfile.containerCard}>
            <TouchableOpacity style={StyleProfile.viewAvatarCard}>
                <Image style={StyleProfile.imageAvatarCard} source={{uri:'https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg'}}/>
            </TouchableOpacity>
            <View style={StyleProfile.viewInfoCard}>
                <TouchableOpacity style={StyleProfile.viewInfoItem}>
                    <Text style={StyleProfile.numberInfo}>123</Text>
                    <Text style={StyleProfile.titleInfo}>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleProfile.viewInfoItem}>
                    <Text style={StyleProfile.numberInfo}>123</Text>
                    <Text style={StyleProfile.titleInfo}>Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleProfile.viewInfoItem}>
                    <Text style={StyleProfile.numberInfo}>123</Text>
                    <Text style={StyleProfile.titleInfo}>Following</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}