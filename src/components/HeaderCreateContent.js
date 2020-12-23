import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StyleNewFeed from '../themes/StyleNewFeed';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default HeaderCreateContent = (props) => {
    const { handleGotoCreateContent } = props;
    const { handleGoBack } = props;
    return (
        <View style={StyleNewFeed.containerHeaderNewFeed}>
            <View style={StyleNewFeed.containerHeaderNewFeedLeft}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Ionicons name="ios-chevron-back-sharp" size={28} color={'#03a9f4'} />
                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={handleGotoCreateContent}>
                <Text style={StyleNewFeed.textHeaderNewFeed}>Upload</Text>
            </TouchableOpacity>
        </View>
    );
}