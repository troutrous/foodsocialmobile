import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StyleNewFeed from '../themes/StyleNewFeed';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default HeaderCreateImage = (props) => {
    const {handleGotoCreateContent} = props;
    const {handleGoBack} = props;
    return (
        <View style={StyleNewFeed.containerHeaderNewFeed}>
            <View style={StyleNewFeed.containerHeaderNewFeedLeft}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Ionicons name="ios-close-sharp" size={28} color={'#03a9f4'} />
                </TouchableOpacity>
                <Text style={StyleNewFeed.textHeaderNewFeed}>Create post</Text>
            </View>
            <TouchableOpacity onPress={handleGotoCreateContent}>
                <Ionicons name="ios-chevron-forward" size={28} color={'#03a9f4'} />
            </TouchableOpacity>
        </View>
    );
}