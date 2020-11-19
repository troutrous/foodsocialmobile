
const URL_BASE = 'http://192.168.43.212:3000';


export const checkExistProfileByEmail = (userEmail) => {
    return fetch(URL_BASE + '/auth/checkexistprofilebyemail', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset = utf-8'
        },
        body: JSON.stringify({
            userEmail: userEmail
        })
    })
        .then((response) => response.json())
        .then((dataResponse) => {
            return dataResponse.checkExistProfileByEmail;
        })
        .catch((err) => console.log(err));
}

export const signUp = (signUpData) => {
    return fetch(URL_BASE + '/auth/signup', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset = utf-8'
        },
        body: JSON.stringify({
            ...signUpData
        })
    })
        .then((response) => response.json())
        .then((dataResponse) => {
            return dataResponse;
        })
        .catch((err) => console.log(err));
}

export const signIn = (signInData) => {
    return fetch(URL_BASE + '/auth/signin', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset = utf-8'
        },
        body: JSON.stringify({
            ...signInData
        })
    })
        .then((response) => response.json())
        .then((dataResponse) => {
            return dataResponse;
        })
        .catch((err) => console.log(err));
}

