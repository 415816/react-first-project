import {connect} from "react-redux";
import UsersContainer from "./UsersContainer";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageCount: state.usersPage.pageCount,
        usersOnPage: state.usersPage.usersOnPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (id) => {
            dispatch({type: 'follow', id: id});
        },
        unfollow: (id) => {
            dispatch({type: 'unfollow', id: id});
        },
        setUsers: (users) => {
            dispatch({type: 'setUsers', users: users})
        },
        setCurrentPage: (pageNumber) => {
            dispatch({type: 'setCurrentPage', currentPage: pageNumber})
        },
        setTotalCount: (totalCount) => {
            dispatch({type: 'setTotalCount', currentPage: totalCount})
        },
        toggleIsFetching: (isTrue) => {
            dispatch({type: 'toggleIsFetching', isFetching: isTrue})
        }
    }
}

const UsersWrapper = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default UsersWrapper;