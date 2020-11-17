const initialState = {
    userSignin: '',
    userPassword: '',
    userFirstname: '',
    userLastname: '',
    userEmail: '',
    userBOD: new Date().toJSON().slice(0, 10),
    userGender: null,
    userAddress: '',
    userPhone: '',
}


const signReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER_SIGNIN' : {
            const newState = {...state};
            newState.userSignin = action.payload;
            return newState;
        }
        case 'ADD_USER_PASSWORD' : {
            const newState = {...state};
            newState.userPassword = action.payload;
            return newState;
        }
        case 'ADD_USER_FIRSTNAME' : {
            const newState = {...state};
            newState.userFirstname = action.payload;
            return newState;
        }
        case 'ADD_USER_LASTNAME' : {
            const newState = {...state};
            newState.userLastname = action.payload;
            return newState;
        }
        case 'ADD_USER_EMAIL' : {
            const newState = {...state};
            newState.userEmail = action.payload;
            return newState;
        }
        case 'ADD_USER_BOD' : {
            const newState = {...state};
            newState.userBOD = action.payload;
            return newState;
        }
        case 'ADD_USER_GENDER' : {
            const newState = {...state};
            newState.userGender = action.payload;
            return newState;
        }
        case 'ADD_USER_ADDRESS' : {
            const newState = {...state};
            newState.userAddress = action.payload;
            return newState;
        }
        case 'ADD_USER_PHONE' : {
            const newState = {...state};
            newState.userPhone = action.payload;
            return newState;
        }
        default : return state
    }
}
export default signReducer;