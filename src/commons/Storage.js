import AsyncStorage from '@react-native-community/async-storage';

export const setToken = async (value) => {
    try {
        await AsyncStorage.setItem('token', value);
    } catch (error) {
        // save error
        console.log(error)
    }
};

export const getToken = async () => {
    try {
        value = await AsyncStorage.getItem('token');
        if (value != null) {
            return value;
        } else {
            return null;
        }
    } catch (error) {
        // read error
        return null;
    }
};
export const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('token');
    } catch (error) {
        // read error
        return null;
    }
};
export const setProfile = async (value) => {
    try {
        await AsyncStorage.setItem('profile', JSON.stringify(value));
    } catch (error) {
        // save error
        console.log(error)
    }
};

export const getProfile = async () => {
    try {
        value = await AsyncStorage.getItem('profile');
        if (value != null) {
            return JSON.parse(value);
        } else {
            return null;
        }
    } catch (error) {
        // read error
        return null;
    }
};
export const removeProfile = async () => {
    try {
        await AsyncStorage.removeItem('profile');
    } catch (error) {
        // read error
        return null;
    }
};