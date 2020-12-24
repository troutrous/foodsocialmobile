import React, { useCallback, useState, useEffect } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PostNewFeedItem from '../components/PostNewFeedItem';
import StyleNewFeed from '../themes/StyleNewFeed';
import { useDispatch, useSelector } from 'react-redux';

const NewFeed = (props) => {
    const dispatch = useDispatch();
    const profileRedux = useSelector(state => state.profile);
    const tokenRedux = useSelector(state => state.token);
    const { navigation } = props;


    useEffect(() => {
        console.log(profileRedux);
        console.log(tokenRedux);
    }, []);



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
            <PostNewFeedItem handleCommentRequest={handleGotoComment} />
            <PostNewFeedItem handleCommentRequest={handleGotoComment} />
            <PostNewFeedItem handleCommentRequest={handleGotoComment} />
            <PostNewFeedItem handleCommentRequest={handleGotoComment} />
        </ScrollView>
    );
}

// NewFeed.navigationOptions = {
//     headerTitle: () => <HeaderNewFeed />
// };

export default NewFeed;