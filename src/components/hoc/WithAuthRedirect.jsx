import React from "react";
import {Redirect} from "react-router-dom";

export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.myLogin === null) return <Redirect to='/login/'/>
            return <Component {...this.props}/>
        }
    }
    return RedirectComponent;
}