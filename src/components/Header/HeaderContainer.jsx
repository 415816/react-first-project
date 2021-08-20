import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUser} from "../../redux/authReducer";
import {authAPI} from "../../api/API";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.exeAuth().then(response => {
            if (response.resultCode === 0) {
                this.props.setAuthUser(response.data.id, response.data.login, response.data.email)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }

};

const mapStateToProps = (state) => {
    return ({
        id: state.authReducer.id,
        login: state.authReducer.login,
        email: state.authReducer.email,
        resultCode: state.authReducer.resultCode
    })
}
export default connect(mapStateToProps, {setAuthUser})(HeaderContainer);
