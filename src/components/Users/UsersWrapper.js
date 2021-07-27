import {connect} from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (id) => {
            dispatch({type: 'follow', id: id});
        },
        unfollow: (id) => {
            dispatch({type: 'unfollow', id: id});
        }
    }
}

const UsersWrapper = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersWrapper;