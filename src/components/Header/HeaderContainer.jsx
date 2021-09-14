import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOutThunk} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
};

const mapStateToProps = (state) => {
    return ({
        id: state.authReducer.id,
        login: state.authReducer.login,
        email: state.authReducer.email,
        isAuth: state.authReducer.isAuth
    })
}
export default connect(mapStateToProps, {logOutThunk})(HeaderContainer);
