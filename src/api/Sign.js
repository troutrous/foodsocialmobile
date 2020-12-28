const URL_BASE = 'http://192.168.0.109:3000';


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
        .then(response => {
            const statusCode = response.status;
            const data = response.json();
            const token = response.headers.get('Authorization');
            return Promise.all([statusCode, data, token])
        })
        .then(([statusCode, dataResponse, token]) => {
            console.log(dataResponse);
            if (statusCode === 200 && token) {
                return { successSignup: true, ...dataResponse, token: token };
            }
            else {
                return { successSignup: false };
            }
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
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
        .then(response => {
            const statusCode = response.status;
            const data = response.json();
            const token = response.headers.get('Authorization');
            return Promise.all([statusCode, data, token])
        })
        .then(([statusCode, dataResponse, token]) => {
            if (statusCode === 200 && token) {
                return { successSignin: true, ...dataResponse, token: token };
            }
            else {
                return { successSignin: false };
            }
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}

export const signInWithGoogle = (signInData) => {
    return fetch(URL_BASE + '/auth/signinwithgoogle', {
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
        .then(response => {
            const statusCode = response.status;
            const data = response.json();
            const token = response.headers.get('Authorization');
            return Promise.all([statusCode, data, token])
        })
        .then(([statusCode, dataResponse, token]) => {
            if (statusCode === 200 && token) {
                return { successSignin: true, ...dataResponse, token };
            }
            else {
                return { successSignin: false };
            }
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}

