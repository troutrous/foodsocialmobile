export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const addUserSignin = (userSignin) => {
    return {
        type: 'ADD_USER_SIGNIN',
        payload: userSignin,
    }
}

export const addUserPassword = (userPassword) => {
    return {
        type: 'ADD_USER_PASSWORD',
        payload: userPassword,
    }
}

export const addUserFirstname = (userFirstname) => {
    return {
        type: 'ADD_USER_FIRSTNAME',
        payload: userFirstname,
    }
}

export const addUserLastname = (userLastname) => {
    return {
        type: 'ADD_USER_LASTNAME',
        payload: userLastname,
    }
}

export const addUserEmail = (userEmail) => {
    return {
        type: 'ADD_USER_EMAIL',
        payload: userEmail,
    }
}

export const addUserBOD = (userBOD) => {
    return {
        type: 'ADD_USER_BOD',
        payload: userBOD,
    }
}

export const addUserGender = (userGender) => {
    return {
        type: 'ADD_USER_GENDER',
        payload: userGender,
    }
}

export const addUserAddress = (userAddress) => {
    return {
        type: 'ADD_USER_ADDRESS',
        payload: userAddress,
    }
}
export const addUserPhone = (userPhone) => {
    return {
        type: 'ADD_USER_PHONE',
        payload: userPhone,
    }
}