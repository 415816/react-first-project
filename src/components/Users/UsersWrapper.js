import {connect} from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
    return{
        state: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{

    }
}

const UsersWrapper = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersWrapper;