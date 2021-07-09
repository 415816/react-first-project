//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';
import Settings from './components/Settings/Settings';


const App = () => {
  return (

    <div className="main-div">
      <Header />
      <SideBar />
      <div>
        <Profile />
        <Message />
        <News />
        <Music />
        <Settings />
      </div>
    </div>

  );
};

export default App;
