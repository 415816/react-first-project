import './App.css';
import SideBar from './components/SideBar/SideBar';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Redirect, Route, withRouter} from 'react-router-dom';
import MessagesWrapper from "./components/Messages/MessagesWrapper";
import UsersWrapper from "./components/Users/UsersWrapper";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initialize} from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";
import store from "./redux/reduxStore";
import React from "react";

const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));


class App extends Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className="main-div">
                    <HeaderContainer/>
                    <SideBar sidebar={this.props.sidebar}/>
                    <div>
                        <Route exact path='/' render={() => <Redirect to={"/profile/"}/>}/>
                        <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                        <Route path='/messages' render={() => <MessagesWrapper/>}/>
                        <React.Suspense fallback={<Preloader/>}>
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                        </React.Suspense>
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

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initialize}))(App);

export const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
