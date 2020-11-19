import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import StyleSearch from '../themes/StyleSearch';
// import { useSelector, useDispatch } from 'react-redux';

const Search = (props) => {
    const { navigation } = props;
    const { route } = props;
    // const dispatch = useDispatch();
    return (
        <View style={StyleSearch.containerScreen}>
            <View style={StyleSearch.viewTextInput}>
                <TextInput 
                style={StyleSearch.textInput} 
                placeholder={'Search'}
                keyboardType={'web-search'}
                returnKeyType={'search'}
                />
            </View>
            <View style={StyleSearch.viewSearchContent}>
                <ScrollView>
                    <View style={StyleSearch.viewContent}>
                        <View style={StyleSearch.contentItemType1}>
                            <Image
                                style={StyleSearch.imageItemType1}
                                source={{ uri: 'https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg' }}
                            />
                            <Image
                                style={StyleSearch.imageItemType4}
                                source={{ uri: 'https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg' }}
                            />
                        </View>
                        <View style={StyleSearch.contentItemType2}>
                            <Image
                                style={StyleSearch.imageItemType2}
                                source={{ uri: 'https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg' }}
                            />
                            <Image
                                style={StyleSearch.imageItemType2}
                                source={{ uri: 'https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg' }}
                            />
                        </View>
                        <View style={StyleSearch.contentItemType3}>
                            <Image
                                style={StyleSearch.imageItemType3}
                                source={{ uri: 'https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg' }}
                            />
                        </View>
                        <View style={StyleSearch.contentItemType2}>
                            <Image
                                style={StyleSearch.imageItemType2}
                                source={{ uri: 'https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg' }}
                            />
                            <Image
                                style={StyleSearch.imageItemType2}
                                source={{ uri: 'https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg' }}
                            />
                        </View>
                        <View style={StyleSearch.contentItemType1}>
                            <Image
                                style={StyleSearch.imageItemType1}
                                source={{ uri: 'https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg' }}
                            />
                            <Image
                                style={StyleSearch.imageItemType4}
                                source={{ uri: 'https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg' }}
                            />
                        </View>
                        
                        <View style={StyleSearch.contentItemType3}>
                            <Image
                                style={StyleSearch.imageItemType3}
                                source={{ uri: 'https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg' }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

Search.navigationOptions = {
    title: 'Search',
    headerStyle: {
        backgroundColor: '#ff727d',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
};

export default Search;