import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authThunk} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authThunk();
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
export default connect(mapStateToProps, {authThunk})(HeaderContainer);
