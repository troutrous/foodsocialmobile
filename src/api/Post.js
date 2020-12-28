const URL_BASE = 'http://192.168.0.109:3000';

export const getPost = (postRequest) => {
    return fetch(URL_BASE + '/post/get', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset = utf-8'
        },
        body: JSON.stringify({
            ...postRequest
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
                return { successGet: true, posts: dataResponse };
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
export const getPostByUser = (postRequest) => {
    return fetch(URL_BASE + '/post/getbyuser', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset = utf-8'
        },
        body: JSON.stringify({
            ...postRequest
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
                return { successGet: true, posts: dataResponse };
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
export const createPost = (formData) => {
    return fetch(URL_BASE + '/post/create', {
        method: 'POST',
        body: formData,
        // cache: 'no-cache',
    })
        .then(response => {
            const statusCode = response.status;
            const data = response.json();
            // const token = response.headers.get('Authorization');
            return Promise.all([statusCode, data])
        })
        .then(([statusCode, dataResponse]) => {
            if (statusCode === 200) {
                return { successCreate: true, image: dataResponse };
            }
            else {
                console.log(dataResponse);
                return { successCreate: false };
            }
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}
export const deletePost = (postData) => {
    console.log(postData);
    return fetch(URL_BASE + '/post/deletebyid', {
        method: 'DELETE',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset = utf-8'
        },
        body: JSON.stringify({
            ...postData
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
                return { successDelete: true, image: dataResponse };
            }
            else {
                console.log(dataResponse);
                return { successDelete: false };
            }
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}
export const createVote = (voteRequest) => {
    return fetch(URL_BASE + '/vote/create', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset = utf-8'
        },
        body: JSON.stringify({
            ...voteRequest
        })
    })
        .then(response => {
            const statusCode = response.status;
            const data = response.json();
            // const token = response.headers.get('Authorization');
            return Promise.all([statusCode, data])
        })
        .then(([statusCode, dataResponse]) => {
            console.log(dataResponse);
            if (statusCode === 200) {
                return { successCreate: true, vote: dataResponse };
            }
            else {
                console.log(dataResponse);
                return { successCreate: false };
            }
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}
export const updateVoteByID = (voteRequest) => {
    return fetch(URL_BASE + '/vote/updatebyid', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset = utf-8'
        },
        body: JSON.stringify({
            ...voteRequest
        })
    })
        .then(response => {
            const statusCode = response.status;
            const data = response.json();
            // const token = response.headers.get('Authorization');
            return Promise.all([statusCode, data])
        })
        .then(([statusCode, dataResponse]) => {
            console.log(dataResponse);
            if (statusCode === 200) {
                return { successUpdate: true, vote: dataResponse };
            }
            else {
                console.log(dataResponse);
                return { successUpdate: false };
            }
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}
export const getCommnentByPost = (commentRequest) => {
    return fetch(URL_BASE + '/comment/getbypost', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset = utf-8'
        },
        body: JSON.stringify({
            ...commentRequest
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
                return { successGet: true, comments: dataResponse };
            }
            else {
                console.log(dataResponse);
                return { successGet: false };
            }
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}
export const createComment = (commentRequest) => {
    return fetch(URL_BASE + '/comment/create', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset = utf-8'
        },
        body: JSON.stringify({
            ...commentRequest
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
                return { successCreate: true, comments: dataResponse };
            }
            else {
                console.log(dataResponse);
                return { successCreate: false };
            }
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}