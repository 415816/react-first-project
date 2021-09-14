import './App.css';
import Music from './components/Music/Music';
import News from './components/News/News';
import SideBar from './components/SideBar/SideBar';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import MessagesWrapper from "./components/Messages/MessagesWrapper";
import UsersWrapper from "./components/Users/UsersWrapper";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialize} from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initialize();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <BrowserRouter>
                <div className="main-div">
                    <HeaderContainer/>
                    <SideBar sidebar={this.props.sidebar}/>
                    <div>
                        <Route exact path='/' render={() => <ProfileContainer/>}/>
                        <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                        <Route path='/messages' render={() => <MessagesWrapper/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/users' render={() => <UsersWrapper/>}/>
                        <Route path='/Settings' component={Settings}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized
})
export default compose (
    withRouter,
    connect(mapStateToProps, {initialize})) (App);
