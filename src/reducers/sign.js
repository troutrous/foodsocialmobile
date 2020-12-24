const initialState = {
    signupSignin: '',
    signupPassword: '',
    signupFirstname: '',
    signupLastname: '',
    signupEmail: '',
    signupBOD: new Date().toJSON().slice(0, 10),
    signupGender: null,
    signupAddress: '',
    signupPhone: '',
    signupIDGoogle: '',
    signupTicketGoogle: '',
    signupAvatar: '',
    signupTypeProfile: null,
}


const signReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SIGNUP_SIGNIN' : {
            const newState = {...state};
            newState.signupSignin = action.payload;
            return newState;
        }
        case 'ADD_SIGNUP_PASSWORD' : {
            const newState = {...state};
            newState.signupPassword = action.payload;
            return newState;
        }
        case 'ADD_SIGNUP_FIRSTNAME' : {
            const newState = {...state};
            newState.signupFirstname = action.payload;
            return newState;
        }
        case 'ADD_SIGNUP_LASTNAME' : {
            const newState = {...state};
            newState.signupLastname = action.payload;
            return newState;
        }
        case 'ADD_SIGNUP_EMAIL' : {
            const newState = {...state};
            newState.signupEmail = action.payload;
            return newState;
        }
        case 'ADD_SIGNUP_BOD' : {
            const newState = {...state};
            newState.signupBOD = action.payload;
            return newState;
        }
        case 'ADD_SIGNUP_GENDER' : {
            const newState = {...state};
            newState.signupGender = action.payload;
            return newState;
        }
        case 'ADD_SIGNUP_ADDRESS' : {
            const newState = {...state};
            newState.signupAddress = action.payload;
            return newState;
        }
        case 'ADD_SIGNUP_PHONE' : {
            const newState = {...state};
            newState.signupPhone = action.payload;
            return newState;
        }
        case 'ADD_SIGNUP_TYPE' : {
            const newState = {...state};
            newState.signupTypeProfile = action.payload;
            return newState;
        }
        case 'ADD_SIGNUP_IDGOOGLE' : {
            const newState = {...state};
            newState.signupIDGoogle = action.payload;
            return newState;
        }
        case 'ADD_SIGNUP_TICKETGOOGLE' : {
            const newState = {...state};
            newState.signupTicketGoogle = action.payload;
            return newState;
        }
        case 'ADD_SIGNUP_AVATAR' : {
            const newState = {...state};
            newState.signupAvatar = action.payload;
            return newState;
        }
        default : return state
    }
}
export default signReducer;