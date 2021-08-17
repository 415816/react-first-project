import React from "react";
import * as axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) userID = 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/` + userID).then(response => {
            this.props.setProfile(response.data);
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile})

let WithURLProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setProfile})(WithURLProfileContainer)