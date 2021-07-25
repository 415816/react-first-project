import {connect} from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: dispatch()

    }
}

const UsersWrapper = connect(mapStateToProps)(Users);

export default UsersWrapper;