import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import StyleNotification from '../themes/StyleNotification';

const NotificationItem = (props) => {
    return (
        <View style={StyleNotification.containerItem}>
            <View style={StyleNotification.viewAvatarNoti}>
                <Image style={StyleNotification.imageAvatarNoti} source={{ uri: 'https://d2d0b2rxqzh1q5.cloudfront.net/sv/1.67/dir/6fa/image/6fa1d684b825ec681c8f2812c8d0334d.jpg' }} />
            </View>
            <View style={StyleNotification.viewTextNoti}>
                <Text style={StyleNotification.fontRegular}>
                    <Text style={StyleNotification.fontBold}>troutrous </Text>
                    Notification tooi laf basnh khucs daay hahaha
                </Text>
            </View>
        </View>
    );
}

export default NotificationItem;