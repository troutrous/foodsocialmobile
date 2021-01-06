import URL_BASE from './BaseURL';

export const getProfileByID = (profileRequest) => {
    return fetch(URL_BASE + '/profile/getbyid', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset = utf-8'
        },
        body: JSON.stringify({
            ...profileRequest
        })
    })
        .then(response => {
            const statusCode = response.status;
            const data = response.json();
            // const token = response.headers.get('Authorization');
            return Promise.all([statusCode, data])
        })
        .then(([statusCode, dataResponse]) => {
            if (statusCode === 200) {
                return { successGet: true, ...dataResponse };
            }
            else {
                return { successGet: false };
            }
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}