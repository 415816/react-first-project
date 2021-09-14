import {authThunk} from "./authReducer";

let stateInit = {
    initialized: false
};

const appReducer = (state = stateInit, action) => {
    switch (action.type) {
        case 'SET-INITIALIZED': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const setInitialized = () => ({type: 'SET-INITIALIZED'});

export default appReducer;

export const initialize = () => (dispatch) => {
    let promise = dispatch(authThunk());
    promise.then (()=>{
        dispatch(setInitialized());
    })

}
