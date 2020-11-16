import React, { useState } from 'react';
import { Image, Text, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StyleNewFeed from '../themes/StyleNewFeed';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
export default function PostNewFeed(props) {
    const {handleCommentRequest} = props;
    const [voteCount, setVoteCount] = useState(0);

    

    const handleVoteCountChange = (value) => {
        setVoteCount(value);
    }
    
    const handleGotoProfile = (value) => {
        navigation.navigate('Profile');
    }
    return (
        <View style={StyleNewFeed.containerPostItemNewFeed} >
            <View style={StyleNewFeed.headerPostNewFeed}>
                <TouchableOpacity style={StyleNewFeed.userPostNewFeed} onPress={() => handleGotoProfile()}>
                    <Image source={require('../assets/images/logoo.jpg')} style={StyleNewFeed.avatarUserPostNewFeed} />
                    <Text style={StyleNewFeed.nameUserPostNewFeed}>Minh Chau</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name={'dots-vertical'} color={'#00aff2'} size={25} style={StyleNewFeed.searchIconHeaderNewFeed} />
                </TouchableOpacity>
            </View>
            <View style={StyleNewFeed.contentPostNewFeed}>
                <TouchableWithoutFeedback style={StyleNewFeed.imagesContentPostNewFeed}>
                    <Image style={StyleNewFeed.imageContentPostNewFeed} resizeMode={'contain'} source={{ uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636' }} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => handleCommentRequest()} style={StyleNewFeed.textsContentPostNewFeed}>
                    <Text style={StyleNewFeed.textContentPostNewFeed}>
                        Hà Nội nhớ em, đêm buông cơn mưa rào vào phòng anh làm ướt gối thay cho lời chào :))
                    </Text>
                </TouchableWithoutFeedback>
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
                        <Text style={StyleNewFeed.textBold}>3.2/5</Text>
                    </TouchableOpacity>
                </View>
                <View style={StyleNewFeed.asideReactPostNewFeed}>
                    <TouchableOpacity onPress={() => handleCommentRequest({ focusRequired: true })}>
                        <Ionicons name='chatbox-ellipses-outline' color={'#00aff2'} size={25} style={StyleNewFeed.iconReactPostNewFeed} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={StyleNewFeed.containerDetailPostNewFeed}>
                <Text style={StyleNewFeed.textLikeDetail}>Liked by <Text style={StyleNewFeed.textBold}>leomessi</Text> and <Text style={StyleNewFeed.textBold}>others</Text></Text>
            </View>
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