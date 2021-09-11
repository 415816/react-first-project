import './App.css';
import Music from './components/Music/Music';
import News from './components/News/News';
import SideBar from './components/SideBar/SideBar';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import MessagesWrapper from "./components/Messages/MessagesWrapper";
import UsersWrapper from "./components/Users/UsersWrapper";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login, {LoginForm} from "./components/Login/Login";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="main-div">
                <HeaderContainer/>
                <SideBar sidebar={props.sidebar}/>
                <div>
                    <Route exact path='/' render={() => <ProfileContainer />}/>
                    <Route path='/profile/:userID?' render={() => <ProfileContainer />}/>
                    <Route path='/messages' render={() => <MessagesWrapper />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/users' render={() => <UsersWrapper />}/>
                    <Route path='/Settings' component={Settings}/>
                    <Route path='/login' render={() => <Login />}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
