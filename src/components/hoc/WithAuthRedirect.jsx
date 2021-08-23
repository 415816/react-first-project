import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({myLogin: state.authReducer.login});

export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.myLogin === null) return <Redirect to='/login/'/>
            return <Component {...this.props}/>
        }
    }
    let addAuthToComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return addAuthToComponent;
}