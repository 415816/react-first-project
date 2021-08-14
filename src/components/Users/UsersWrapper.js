import {connect} from "react-redux";
import UsersContainer from "./UsersContainer";
import {follow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, unfollow} from "../../redux/usersReducer";

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

// let mapDispatchToProps = (dispatch) => {
//     return{
//         follow: (id) => dispatch (follow(id)),
//
//         unfollow: (id) => dispatch (unfollow(id)),
//
//         setUsers: (users) => dispatch (setUsers(users)),
//
//         setCurrentPage: (pageNumber) => dispatch(setCurrentPage (pageNumber)),
//
//         setTotalCount: (totalCount) => dispatch(setTotalCount(totalCount)),
//
//         toggleIsFetching: (isTrue) => dispatch(toggleIsFetching(isTrue))
//         }
//     }

const UsersWrapper = connect(mapStateToProps, {
                                                follow,
                                                unfollow,
                                                setUsers,
                                                setCurrentPage,
                                                setTotalCount,
                                                toggleIsFetching})(UsersContainer);

export default UsersWrapper;