import {usersAPI} from "../api/API";

let stateInit = {
    users: [],
    pageCount: 0,
    usersOnPage: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = stateInit, action) => {
    switch (action.type) {
        case 'follow': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
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
                        return {...u, followed: false}
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
                ...state, totalUsersCount: action.totalCount
            }
        }
        case 'toggleIsFetching': {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case 'toggleIsFollowingInProgress': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : [state.followingInProgress.filter(id => id != action.id)]
            }
        }
        default:
            return state;
    }
}

export const follow = (id) => ({type: 'follow', id: id});
export const unfollow = (id) => ({type: 'unfollow', id: id});
export const setUsers = (users) => ({type: 'setUsers', users: users});
export const setCurrentPage = (pageNumber) => ({type: 'setCurrentPage', currentPage: pageNumber});
export const setTotalCount = (totalCount) => ({type: 'setTotalCount', totalCount: totalCount});
export const toggleIsFetching = (isTrue) => ({type: 'toggleIsFetching', isFetching: isTrue});
export const toggleIsFollowingInProgress = (isFetching, id) => ({
    type: 'toggleIsFollowingInProgress',
    id: id,
    isFetching
});


export const getUsersThunk = (currentPage, usersOnPage) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        const response = await usersAPI.getUsers(currentPage, usersOnPage);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalCount(response.totalCount));
    }
}

export const followThunk = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, id));
        const response = await usersAPI.followUser(id);
        if (response.data.resultCode === 0) {
            dispatch(follow(id));
        }
        dispatch(toggleIsFollowingInProgress(false, id));
    }
}
export const unFollowThunk = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, id));
        const response = await usersAPI.unfollowUser(id);
        if (response.data.resultCode == 0) {
            dispatch(unfollow(id));
        }
        dispatch(toggleIsFollowingInProgress(false, id));
    }
}
export default usersReducer;