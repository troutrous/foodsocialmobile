import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StyleNewFeed from '../themes/StyleNewFeed';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { updateVoteByID, createVote } from '../api/Post';
export default function PostNewFeed(props) {
    const { handleCommentRequest } = props;
    const { handlerVisible } = props;
    const { post } = props;
    const profileIDRedux = useSelector(state => state.profile.profileID);
    const [voteCount, setVoteCount] = useState(post.vote.find(item => item.userID == profileIDRedux)?.voteValue || 0);
    const [voteAVG, setVoteAVG] = useState(post.voteAVG || 0);

    const handleVoteCountChange = async (value) => {
        if (!post.vote.find(item => item.userID == profileIDRedux)) {
            const dataResponse = await createVote({
                userID: profileIDRedux,
                voteValue: value,
                postID: post.postID
            })
            if (dataResponse.successCreate) {
                setVoteCount(value);
                post.vote.push({
                    voteValue: value
                });
                setVoteAVG(post.vote.reduce((acc, item) => { return (acc + item.voteValue) }, 0) / post.vote.length);
            } else {
                console.log("Lỗi hệ thống");
            }
        } else {
            const dataResponse = await updateVoteByID({
                voteID: post.vote.find(item => item.userID == profileIDRedux).voteID,
                voteValue: value,
            })
            if (dataResponse.successUpdate) {
                post.vote.find(item => item.userID == profileIDRedux).voteValue = value;
                setVoteCount(value);
                setVoteAVG(post.vote.reduce((acc, item) => { return (acc + item.voteValue) }, 0) / post.vote.length);
            } else {
                console.log("Lỗi hệ thống");
            }
        }

    }

    // const handleGotoProfile = (value) => {
    //     navigation.navigate('Profile');
    // }
    return (
        <View style={StyleNewFeed.containerPostItemNewFeed} >
            <View style={StyleNewFeed.headerPostNewFeed}>
                <TouchableOpacity style={StyleNewFeed.userPostNewFeed} onPress={() => navigation.navigate('Profile')}>
                    <Image source={{ uri: post.user.imageSource }} style={StyleNewFeed.avatarUserPostNewFeed} />
                    <Text style={StyleNewFeed.nameUserPostNewFeed}>{post.user.userFirstname + ' ' + post.user.userLastname}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlerVisible(post.postID)}>
                    <MaterialCommunityIcons name={'dots-vertical'} color={'#00aff2'} size={25} style={StyleNewFeed.searchIconHeaderNewFeed} />
                </TouchableOpacity>
            </View>
            <View style={StyleNewFeed.contentPostNewFeed}>
                {
                    post.image.length != 0 && (
                        <TouchableWithoutFeedback style={StyleNewFeed.imagesContentPostNewFeed}>
                            <Image style={StyleNewFeed.imageContentPostNewFeed} resizeMode={'cover'} source={{ uri: post.image[0].imageSource }} />
                        </TouchableWithoutFeedback>
                    )
                }
                {
                    post.content.length != 0 && (
                        <TouchableWithoutFeedback onPress={() => handleCommentRequest({ postID: post.postID })} style={StyleNewFeed.textsContentPostNewFeed}>
                            <Text style={StyleNewFeed.textContentPostNewFeed}>
                                {post.content[0].contentText}
                            </Text>
                        </TouchableWithoutFeedback>
                    )
                }

            </View>
            <View style={StyleNewFeed.containerReactPostNewFeed}>
                <View style={StyleNewFeed.asideReactPostNewFeed}>
                    {
                        voteCount >= 1 &&
                        (<TouchableOpacity onPress={() => handleVoteCountChange(1)}>
                            <AntDesign name='star' color={'#ffd020'} size={25} style={StyleNewFeed.iconReactPostNewFeed} />
                        </TouchableOpacity>) ||
                        (<TouchableOpacity onPress={() => handleVoteCountChange(1)}>
                            <AntDesign name='staro' color={'#00aff2'} size={25} style={StyleNewFeed.iconReactPostNewFeed} />
                        </TouchableOpacity>)
                    }
                    {
                        voteCount >= 2 &&
                        (<TouchableOpacity onPress={() => handleVoteCountChange(2)}>
                            <AntDesign name='star' color={'#ffd020'} size={25} style={StyleNewFeed.iconReactPostNewFeed} />
                        </TouchableOpacity>) ||
                        (<TouchableOpacity onPress={() => handleVoteCountChange(2)}>
                            <AntDesign name='staro' color={'#00aff2'} size={25} style={StyleNewFeed.iconReactPostNewFeed} />
                        </TouchableOpacity>)
                    }
                    {
                        voteCount >= 3 &&
                        (<TouchableOpacity onPress={() => handleVoteCountChange(3)}>
                            <AntDesign name='star' color={'#ffd020'} size={25} style={StyleNewFeed.iconReactPostNewFeed} />
                        </TouchableOpacity>) ||
                        (<TouchableOpacity onPress={() => handleVoteCountChange(3)}>
                            <AntDesign name='staro' color={'#00aff2'} size={25} style={StyleNewFeed.iconReactPostNewFeed} />
                        </TouchableOpacity>)
                    }
                    {
                        voteCount >= 4 &&
                        (<TouchableOpacity onPress={() => handleVoteCountChange(4)}>
                            <AntDesign name='star' color={'#ffd020'} size={25} style={StyleNewFeed.iconReactPostNewFeed} />
                        </TouchableOpacity>) ||
                        (<TouchableOpacity onPress={() => handleVoteCountChange(4)}>
                            <AntDesign name='staro' color={'#00aff2'} size={25} style={StyleNewFeed.iconReactPostNewFeed} />
                        </TouchableOpacity>)
                    }
                    {
                        voteCount >= 5 &&
                        (<TouchableOpacity onPress={() => handleVoteCountChange(5)}>
                            <AntDesign name='star' color={'#ffd020'} size={25} style={StyleNewFeed.iconReactPostNewFeed} />
                        </TouchableOpacity>) ||
                        (<TouchableOpacity onPress={() => handleVoteCountChange(5)}>
                            <AntDesign name='staro' color={'#00aff2'} size={25} style={StyleNewFeed.iconReactPostNewFeed} />
                        </TouchableOpacity>)
                    }

                    <TouchableOpacity>
                        <Text style={StyleNewFeed.textBold}>{voteAVG || 0}/5</Text>
                    </TouchableOpacity>
                </View>
                <View style={StyleNewFeed.asideReactPostNewFeed}>
                    <TouchableOpacity onPress={() => handleCommentRequest({ focusRequired: true, postID: post.postID })}>
                        <Ionicons name='chatbox-ellipses-outline' color={'#00aff2'} size={25} style={StyleNewFeed.iconReactPostNewFeed} />
                    </TouchableOpacity>
                </View>
            </View>
            {
                post.vote.length != 0 && (
                    <View style={StyleNewFeed.containerDetailPostNewFeed}>
                        <Text style={StyleNewFeed.textLikeDetail}>Voted by <Text style={StyleNewFeed.textBold}>{post.vote[0].userFirstname + ' ' + post.vote[0].userLastname}</Text> and <Text style={StyleNewFeed.textBold}>others</Text></Text>
                    </View>
                ) || (
                    <View style={StyleNewFeed.containerDetailPostNewFeed}>
                        <Text style={StyleNewFeed.textLikeDetail}>Be the first to vote for this post</Text>
                    </View>
                )
            }

            <View style={StyleNewFeed.containerCommentPostNewFeed}>
                {/* <View style={StyleNewFeed.viewCommentPostNewFeed}>
                    <TouchableOpacity><Text style={StyleNewFeed.textBold}>justinbieber</Text></TouchableOpacity>
                    <Text>  </Text>
                    <TouchableOpacity onPress={() => handleCommentRequest()}><Text> Amazing colors 🔥</Text></TouchableOpacity>
                </View>
                <View style={StyleNewFeed.viewCommentPostNewFeed}>
                    <TouchableOpacity><Text style={StyleNewFeed.textBold}>dhaval170</Text></TouchableOpacity>
                    <Text>  </Text>
                    <TouchableOpacity onPress={() => handleCommentRequest()}><Text> 🎁 Brilliant job! 😊</Text></TouchableOpacity>
                </View> */}
            </View>
        </View>
    );
}