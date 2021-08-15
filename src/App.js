//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import SideBar from './components/SideBar/SideBar';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import MessagesWrapper from "./components/Messages/MessagesWrapper";
import UsersWrapper from "./components/Users/UsersWrapper";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="main-div">
                <Header/>
                <SideBar sidebar={props.sidebar}/>
                <div>
                    <Route exact path='/' render={() => <ProfileContainer />}/>
                    <Route path='/Profile/:userID' render={() => <ProfileContainer />}/>
                    <Route path='/Messages' render={() => <MessagesWrapper />}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Users' render={() => <UsersWrapper />}/>

                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
