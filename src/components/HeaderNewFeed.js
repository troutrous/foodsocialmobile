import React from 'react';
import {View, Text} from 'react-native';
import StyleNewFeed from '../themes/StyleNewFeed';
import MaterialCommunityIcons from '../../node_modules/react-native-vector-icons/MaterialCommunityIcons';

export default function HeaderNewFeed (props) {
    return(
        <View style={StyleNewFeed.containerHeaderNewFeed}>
            <Text style={StyleNewFeed.textHeaderNewFeed}>F<MaterialCommunityIcons name={'infinity'} color = {'#f7444e'} size = {26} style={StyleNewFeed.logoIconHeaderNewFeed}/>dSocial</Text>
        </View>
    );
}