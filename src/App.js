//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import MyPage from './components/MyPage/MyPage';

const App = () => {
  return (
    <div className="main-div">
      <Header />
      <SideBar />
      <MyPage />
    </div>
  );
}

export default App;
