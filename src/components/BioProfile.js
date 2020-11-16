import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import StyleProfile from '../themes/StyleProfile';
import Ionicons from '../../node_modules/react-native-vector-icons/Ionicons';

export default BioProfile = (props) => {
    return (
        <View style={StyleProfile.containerBio}>
            <Text style={StyleProfile.fontRegular}>
                FORMULA 1®
                Pick your ultimate #F1Fantasy team and compete for prizes! 👉
            </Text>
            <View style={StyleProfile.containerDetialInfo}>
                <View style={StyleProfile.viewDetialInfoItem}>
                    <Text style={StyleProfile.fontBold}>Name: </Text>
                    <Text style={StyleProfile.fontRegular}>Vũ Minh Châu</Text>
                </View>
            </View>
            <View style={StyleProfile.containerDetialInfo}>
                <View style={StyleProfile.viewDetialInfoItem}>
                    <Text style={StyleProfile.fontBold}>Birth: </Text>
                    <Text style={StyleProfile.fontRegular}>26/05/2000</Text>
                </View>
            </View>
            <View style={StyleProfile.containerDetialInfo}>
                <View style={StyleProfile.viewDetialInfoItem}>
                    <Text style={StyleProfile.fontBold}>Address: </Text>
                    <Text style={StyleProfile.fontRegular}>Ha Noi</Text>
                </View>
            </View>
            <TouchableOpacity style={StyleProfile.buttonEditProfile}>
                <Text style={StyleProfile.textButtonEditProfile}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
}