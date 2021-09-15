import {connect} from "react-redux";
import UsersContainer from "./UsersContainer";
import {followThunk, getUsersThunk, unFollowThunk} from "../../redux/usersReducer";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageCount,
    getTotalUsersCount,
    getUsers,
    getUsersOnPage
} from "../../redux/users-selectors";

let mapStateToProps = (state) => {
    return{
        users: getUsers(state),
        pageCount: getPageCount(state),
        usersOnPage: getUsersOnPage(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        getUsersThunk,
        followThunk,
        unFollowThunk
    }),
    WithAuthRedirect,
)(UsersContainer);
