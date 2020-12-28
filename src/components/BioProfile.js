import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import StyleProfile from '../themes/StyleProfile';
import Ionicons from '../../node_modules/react-native-vector-icons/Ionicons';

export default BioProfile = (props) => {
    const {profile} = props;
    return (
        <View style={StyleProfile.containerBio}>
            <Text style={StyleProfile.fontRegular}>
                FORMULA 1®
                Pick your ultimate #F1Fantasy team and compete for prizes! 👉
            </Text>
            <View style={StyleProfile.containerDetialInfo}>
                <View style={StyleProfile.viewDetialInfoItem}>
                    <Text style={StyleProfile.fontBold}>Name: </Text>
                    <Text style={StyleProfile.fontRegular}>{profile.profileFirstname + " " + profile.profileLastname}</Text>
                </View>
            </View>
            <View style={StyleProfile.containerDetialInfo}>
                <View style={StyleProfile.viewDetialInfoItem}>
                    <Text style={StyleProfile.fontBold}>Birth: </Text>
                    <Text style={StyleProfile.fontRegular}>{new Date(profile.profileBOD).toISOString().slice(0,10)}</Text>
                </View>
            </View>
            <View style={StyleProfile.containerDetialInfo}>
                <View style={StyleProfile.viewDetialInfoItem}>
                    <Text style={StyleProfile.fontBold}>Mail: </Text>
                    <Text style={StyleProfile.fontRegular}>{profile.profileEmail}</Text>
                </View>
            </View>
            <View style={StyleProfile.containerDetialInfo}>
                <View style={StyleProfile.viewDetialInfoItem}>
                    <Text style={StyleProfile.fontBold}>Phone: </Text>
                    <Text style={StyleProfile.fontRegular}>{profile.profilePhone}</Text>
                </View>
            </View>
            <View style={StyleProfile.containerDetialInfo}>
                <View style={StyleProfile.viewDetialInfoItem}>
                    <Text style={StyleProfile.fontBold}>Address: </Text>
                    <Text style={StyleProfile.fontRegular}>{profile.profileAddress}</Text>
                </View>
            </View>
            <TouchableOpacity style={StyleProfile.buttonEditProfile}>
                <Text style={StyleProfile.textButtonEditProfile}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
}