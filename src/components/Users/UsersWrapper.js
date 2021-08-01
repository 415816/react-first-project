import {connect} from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageCount: state.usersPage.pageCount,
        usersOnPage: state.usersPage.usersOnPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        }
    }
}

const UsersWrapper = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersWrapper;