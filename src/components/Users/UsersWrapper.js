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

const UsersWrapper = connect(mapStateToProps, {
                                                follow,
                                                unfollow,
                                                setUsers,
                                                setCurrentPage,
                                                setTotalCount,
                                                toggleIsFetching})(UsersContainer);

export default UsersWrapper;