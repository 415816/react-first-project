
import React from "react";
import * as axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.props.match.params.userID).then(response => {
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