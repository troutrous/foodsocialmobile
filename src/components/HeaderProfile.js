import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import StyleNewFeed from '../themes/StyleNewFeed';
import Ionicons from '../../node_modules/react-native-vector-icons/Ionicons';

export default HeaderProfile = (props) => {
    return(
        <View style={StyleNewFeed.containerHeaderNewFeed}>
            <Text style={StyleNewFeed.textHeaderNewFeed}>Minh Chau</Text>
            <TouchableOpacity>
                <Ionicons name="ios-exit-outline" size={28} color={'#03a9f4'}/>
            </TouchableOpacity>
        </View>
    );
}