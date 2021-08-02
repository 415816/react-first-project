let stateInit = {
    users: [],
    pageCount: 0,
    usersOnPage: 10,
    totalUsersCount: 0,
    currentPage: 2,
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
                ...state, users: action.users
            }
        }
        case 'setCurrentPage': {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case 'setTotalCount': {
            return {
                ...state, totalUsersCount: action.currentPage
            }
        }
        default:
            return state;
    }
}


export default usersReducer;