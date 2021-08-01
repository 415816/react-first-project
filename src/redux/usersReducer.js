let stateInit = {
    users: [],
    pageCount: 0,
    usersOnPage: 5,
    totalUsersCount: 10,
    currentPage: 1,
};

const usersReducer = (state = stateInit, action) => {
    switch (action.type) {
        case 'follow': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, following: true}
                    }
                    return u;
                })
            }
        }
        case 'unfollow': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, following: false}
                    }
                    return u;
                })
            }
        }
        case 'setUsers': {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}


export default usersReducer;