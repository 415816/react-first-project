//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import MyPage from './components/MyPage';

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
