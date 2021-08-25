import {connect} from "react-redux";
import UsersContainer from "./UsersContainer";
import {followThunk, getUsersThunk, unFollowThunk} from "../../redux/usersReducer";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageCount: state.usersPage.pageCount,
        usersOnPage: state.usersPage.usersOnPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
