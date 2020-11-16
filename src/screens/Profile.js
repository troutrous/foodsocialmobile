import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image } from 'react-native';
import HeaderProfile from '../components/HeaderProfile'
import StyleProfile from '../themes/StyleProfile';

import PostProfileItem from '../components/PostProfileItem';
import CardProfile from '../components/CardProfile';
import BioProfile from '../components/BioProfile';

const Profile = (props) => {
    const { navigation } = props;
    const { route } = props;

    const handleGotoPost = () => {
        navigation.navigate('PostItem');
    }
    return (
        <View style={StyleProfile.containerPostList}>
            <ScrollView
            showsVerticalScrollIndicator= {false}
            >
                <CardProfile />
                <BioProfile />
                <View style={StyleProfile.viewWrapPostProfileItem}>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                    <PostProfileItem handleGotoPost={handleGotoPost}/>
                </View>
            </ScrollView>
        </View>
    )
}
Profile.navigationOptions = {
    headerTitle: () => <HeaderProfile />
};

export default Profile;