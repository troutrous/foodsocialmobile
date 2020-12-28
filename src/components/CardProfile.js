import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import StyleProfile from '../themes/StyleProfile';

export default CardProfile = (props) => {
    const { profile } = props;
    return (
        <View style={StyleProfile.containerCard}>
            <TouchableOpacity style={StyleProfile.viewAvatarCard} onPress={() => console.log(profile)}>
                <Image style={StyleProfile.imageAvatarCard} source={{ uri: profile.profileAvatar.imageSource }} />
            </TouchableOpacity>
            <View style={StyleProfile.viewInfoCard}>
                <TouchableOpacity style={StyleProfile.viewInfoItem}>
                    <Text style={StyleProfile.numberInfo}>{profile.profilePostCount}</Text>
                    <Text style={StyleProfile.titleInfo}>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleProfile.viewInfoItem}>
                    <Text style={StyleProfile.numberInfo}>{profile.profileFollowerCount}</Text>
                    <Text style={StyleProfile.titleInfo}>Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleProfile.viewInfoItem}>
                    <Text style={StyleProfile.numberInfo}>{profile.profileFollowingCount}</Text>
                    <Text style={StyleProfile.titleInfo}>Following</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}