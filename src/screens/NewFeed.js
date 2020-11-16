import React, { useCallback, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import HeaderNewFeed from '../components/HeaderNewFeed';
import PostNewFeedItem from '../components/PostNewFeedItem';
import StyleNewFeed from '../themes/StyleNewFeed';

const NewFeed = (props) => {
    const {navigation} = props;
    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);

    const handleGotoComment = (value) => {
        navigation.navigate('Comment', value);
    }
    return (
        <ScrollView
            style={StyleNewFeed.containerPostNewFeed}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['red', 'green', 'blue', 'orange']} />
            }
        >
            <PostNewFeedItem handleCommentRequest = {handleGotoComment}/>
            <PostNewFeedItem handleCommentRequest = {handleGotoComment}/>
            <PostNewFeedItem handleCommentRequest = {handleGotoComment}/>
            <PostNewFeedItem handleCommentRequest = {handleGotoComment}/>
        </ScrollView>
    );
}

NewFeed.navigationOptions = {
    headerTitle: () => <HeaderNewFeed />
};

export default NewFeed;