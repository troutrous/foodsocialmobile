const initialState = {
    idToken: null,
}


const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TOKEN': {
            const newState = {...state};
            newState.idToken = action.payload;
            return newState;
        }
        default:
            return state
    }
}

export default tokenReducer;