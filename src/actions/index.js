export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const addSignupSignin = (userSignin) => {
    return {
        type: 'ADD_SIGNUP_SIGNIN',
        payload: userSignin,
    }
}

export const addSignupPassword = (userPassword) => {
    return {
        type: 'ADD_SIGNUP_PASSWORD',
        payload: userPassword,
    }
}

export const addSignupFirstname = (userFirstname) => {
    return {
        type: 'ADD_SIGNUP_FIRSTNAME',
        payload: userFirstname,
    }
}

export const addSignupLastname = (userLastname) => {
    return {
        type: 'ADD_SIGNUP_LASTNAME',
        payload: userLastname,
    }
}

export const addSignupEmail = (userEmail) => {
    return {
        type: 'ADD_SIGNUP_EMAIL',
        payload: userEmail,
    }
}

export const addSignupBOD = (userBOD) => {
    return {
        type: 'ADD_SIGNUP_BOD',
        payload: userBOD,
    }
}

export const addSignupGender = (userGender) => {
    return {
        type: 'ADD_SIGNUP_GENDER',
        payload: userGender,
    }
}

export const addSignupAddress = (userAddress) => {
    return {
        type: 'ADD_SIGNUP_ADDRESS',
        payload: userAddress,
    }
}
export const addSignupPhone = (userPhone) => {
    return {
        type: 'ADD_SIGNUP_PHONE',
        payload: userPhone,
    }
}
export const addSignupType = (userType) => {
    return {
        type: 'ADD_SIGNUP_TYPE',
        payload: userType,
    }
}
export const addSignupIDGoogle = (userIDGoogle) => {
    return {
        type: 'ADD_SIGNUP_IDGOOGLE',
        payload: userIDGoogle,
    }
}
export const addSignupTicketGoogle = (userTicketGoogle) => {
    return {
        type: 'ADD_SIGNUP_TICKETGOOGLE',
        payload: userTicketGoogle,
    }
}
export const addSignupAvatar = (userAvatar) => {
    return {
        type: 'ADD_SIGNUP_AVATAR',
        payload: userAvatar,
    }
}

//token
export const addToken = (token) => {
    return {
        type: 'ADD_TOKEN',
        payload: token,
    }
}
export const deleteToken = () => {
    return {
        type: 'DELETE_TOKEN',
        payload: null,
    }
}

//profile
export const addProfileID = (profileID) => {
    return {
        type: 'ADD_PROFILE_ID',
        payload: profileID,
    }
}
export const addProfileFirstname = (profileFirstname) => {
    return {
        type: 'ADD_PROFILE_FIRSTNAME',
        payload: profileFirstname,
    }
}
export const addProfileLastname = (profileLastname) => {
    return {
        type: 'ADD_PROFILE_LASTNAME',
        payload: profileLastname,
    }
}
export const addProfileEmail = (profileEmail) => {
    return {
        type: 'ADD_PROFILE_EMAIL',
        payload: profileEmail,
    }
}
export const addProfileBOD = (profileBOD) => {
    return {
        type: 'ADD_PROFILE_BOD',
        payload: profileBOD,
    }
}
export const addProfileGender = (profileGender) => {
    return {
        type: 'ADD_PROFILE_GENDER',
        payload: profileGender,
    }
}
export const addProfileAddress = (profileAddress) => {
    return {
        type: 'ADD_PROFILE_ADDRESS',
        payload: profileAddress,
    }
}
export const addProfilePhone = (profilePhone) => {
    return {
        type: 'ADD_PROFILE_PHONE',
        payload: profilePhone,
    }
}
export const addProfileType = (profileType) => {
    return {
        type: 'ADD_PROFILE_TYPE',
        payload: profileType,
    }
}
export const addProfileAvatar = (profileAvatar) => {
    return {
        type: 'ADD_PROFILE_AVATAR',
        payload: profileAvatar,
    }
}
export const addProfileFollowingCount = (profileFollowingCount) => {
    return {
        type: 'ADD_PROFILE_FOLLOWINGCOUNT',
        payload: profileFollowingCount,
    }
}
export const addProfileFollowerCount = (profileFollowerCount) => {
    return {
        type: 'ADD_PROFILE_FOLLOWERCOUNT',
        payload: profileFollowerCount,
    }
}
export const addProfilePostCount = (profilePostCount) => {
    return {
        type: 'ADD_PROFILE_POSTCOUNT',
        payload: profilePostCount,
    }
}
export const addProfile = (profile) => {
    console.log(profile);
    return {
        type: 'ADD_PROFILE',
        payload: {
            profileID : profile.userID,
            profileFirstname : profile.userFirstname,
            profileLastname : profile.userLastname,
            profileGender : profile.userGender,
            profileBOD : profile.userBOD,
            profileEmail : profile.userEmail,
            profilePhone : profile.userPhone,
            profileAddress : profile.userAddress,
            profilePostCount : profile.postCount,
            profileFollowerCount : profile.followerCount,
            profileFollowingCount : profile.followingCount,
            profileType : profile.typeprofileID,
            profileAvatar : {
                imageID: profile.imageID,
                imageSource: profile.imageSource
            },
        },
    }
}
export const deleteProfile = (profile) => {
    return {
        type: 'DELETE_PROFILE',
        payload: null
    }
}
