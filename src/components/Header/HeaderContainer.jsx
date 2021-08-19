import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUser} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUser(response.data.data.id, response.data.data.login, response.data.data.email)
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
