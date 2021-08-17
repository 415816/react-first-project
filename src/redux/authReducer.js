let stateInit = {
    id: null,
    login: null,
    email: null,
    resultCode: null,
    isFetching: false
};

const authReducer = (state = stateInit, action) => {
    switch (action.type) {
        case 'SET-AUTH-USER': {
            return {
                ...state,
                ...action.data,
                resultCode: 0
            }
        }
        default:
            return state;
    }
}

export const setAuthUser = (id, login, email) => ({type: 'SET-AUTH-USER', data: {id, login, email}});

export default authReducer;