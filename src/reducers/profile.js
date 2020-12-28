const initialState = {
    profileID: '',
    profileFirstname: '',
    profileLastname: '',
    profileEmail: '',
    profileBOD: new Date().toJSON().slice(0, 10),
    profileGender: null,
    profileAddress: '',
    profilePhone: '',
    profileType: null,
    profileAvatar: {
        imageID: '',
        imageSource: ''
    },
    profilePostCount: 0,
    profileFollowerCount: 0,
    profileFollowingCount: 0,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PROFILE_ID': {
            const newState = { ...state };
            newState.profileID = action.payload;
            return newState;
        }
        case 'ADD_PROFILE_FIRSTNAME': {
            const newState = { ...state };
            newState.profileFirstname = action.payload;
            return newState;
        }
        case 'ADD_PROFILE_LASTNAME': {
            const newState = { ...state };
            newState.profileLastname = action.payload;
            return newState;
        }
        case 'ADD_PROFILE_EMAIL': {
            const newState = { ...state };
            newState.profileEmail = action.payload;
            return newState;
        }
        case 'ADD_PROFILE_BOD': {
            const newState = { ...state };
            newState.profileBOD = action.payload;
            return newState;
        }
        case 'ADD_PROFILE_GENDER': {
            const newState = { ...state };
            newState.profileGender = action.payload;
            return newState;
        }
        case 'ADD_PROFILE_ADDRESS': {
            const newState = { ...state };
            newState.profileAddress = action.payload;
            return newState;
        }
        case 'ADD_PROFILE_PHONE': {
            const newState = { ...state };
            newState.profilePhone = action.payload;
            return newState;
        }
        case 'ADD_PROFILE_TYPE': {
            const newState = { ...state };
            newState.profileType = action.payload;
            return newState;
        }
        case 'ADD_PROFILE_AVATAR': {
            const newState = { ...state };
            newState.profileAvatar.imageID = action.payload.profileAvatar.imageID;
            newState.profileAvatar.imageSource = action.payload.profileAvatar.imageSource;
            return newState;
        }
        case 'ADD_PROFILE_FOLLOWINGCOUNT': {
            const newState = { ...state };
            newState.profileFollowingCount = action.payload;
            return newState;
        }
        case 'ADD_PROFILE_FOLLOWERCOUNT': {
            const newState = { ...state };
            newState.profileFollowerCount = action.payload;
            return newState;
        }
        case 'ADD_PROFILE_POSTCOUNT': {
            const newState = { ...state };
            newState.profilePostCount = action.payload;
            return newState;
        }
        case 'ADD_PROFILE': {
            const newState = { ...state };
            newState.profileID = action.payload.profileID;
            newState.profileFirstname = action.payload.profileFirstname;
            newState.profileLastname = action.payload.profileLastname;
            newState.profileGender = action.payload.profileGender;
            newState.profileBOD = action.payload.profileBOD;
            newState.profileEmail = action.payload.profileEmail;
            newState.profilePhone = action.payload.profilePhone;
            newState.profileAddress = action.payload.profileAddress;
            newState.profilePostCount = action.payload.profilePostCount;
            newState.profileFollowerCount = action.payload.profileFollowerCount;
            newState.profileFollowingCount = action.payload.profileFollowingCount;
            newState.profileType = action.payload.profileType;
            newState.profileAvatar.imageID = action.payload.profileAvatar.imageID;
            newState.profileAvatar.imageSource = action.payload.profileAvatar.imageSource;
            return newState;
        }
        case 'DELETE_PROFILE': {
            const newState = { ...state };
            newState.profileID = null;
            newState.profileFirstname = null;
            newState.profileLastname = null;
            newState.profileGender = null;
            newState.profileBOD = null;
            newState.profileEmail = null;
            newState.profilePhone = null;
            newState.profileAddress = null;
            newState.profilePostCount = null;
            newState.profileFollowerCount = null;
            newState.profileFollowingCount = null;
            newState.profileType = null;
            newState.profileAvatar.imageID = null;
            newState.profileAvatar.imageSource = null;
            return newState;
        }
        default: return state
    }
}
export default profileReducer;