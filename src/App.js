//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import MessagesWrapper from "./components/Messages/MessagesWrapper";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="main-div">
        <Header />
        <SideBar sidebar={props.sidebar}/>
        <div>
          <Route exact path='/' render={ () => <Profile store={props.store} arrPosts={props.arrPosts} dispatch = {props.dispatch} newPost={props.newPost} />}/>
          <Route path='/Profile' render={ () => <Profile store={props.store} arrPosts={props.arrPosts} dispatch = {props.dispatch } newPost={props.newPost} />}/>
          <Route path='/Messages' render={ () => <MessagesWrapper store={props.store} collectMessages={props.collectMessages} newMessage={props.newMessage} collectPeople={props.collectPeople} dispatch={props.dispatch}/>} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
                </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
