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


const App = () => {
  return (
    <BrowserRouter>
      <div className="main-div">
        <Header />
        <SideBar />
        <div>
          <Route path='/Profile' component={Profile} />
          <Route path='/Messages' component={Messages} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
