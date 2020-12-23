import React, { useCallback, useState, useEffect } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PostNewFeedItem from '../components/PostNewFeedItem';
import StyleNewFeed from '../themes/StyleNewFeed';
const NewFeed = (props) => {
    const { navigation } = props;





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

NewFeed.navigationOptions = ({ navigation }) => {
    const { routes, index } = navigation.dangerouslyGetState();
    const { state: exploreState } = routes[index];
    let tabBarVisible = false;
    // if (exploreState) {
    //     const { routes: exploreRoutes, index: exploreIndex } = exploreState;
    //     const exploreActiveRoute = exploreRoutes[exploreIndex];
    //     if (exploreActiveRoute.name === "NewFeed") tabBarVisible = false;
    // }
    return {
        tabBarVisible: true,
        title: "Hihhihi",
        tabBarLabel: "kuku",
        tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={size} />
        ),
    };
}

export default NewFeed;