import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className="main-div">
      <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Social_networking_services.jpg"></img>
      </header>
      <div className="bod">
        <div className="side-bar">
            <div><a href="#">Profile</a></div>
            <div><a href="#">Messages</a></div>
            <div><a href="#">News</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#">Settings</a></div>
          </div>
        <div className="my-page">
          <div>
            <img className="avatar" src="https://static.bogacho.ru/common/attachments/origin/image/5d/75/03/5bd9df_10.jpg?v=6c7ca4"></img>
          </div>
          <div className="main-info">
            <div>FIO</div>
            <div>Date of Birth</div>
            <div>City</div>
            <div>Education</div>
            <div>Web Site</div>
          </div>
          <div className="my-posts"><h3>My posts</h3>
            <div>
              <input placeholder="Plese input your news"></input>
              <div><button>Send</button></div>
            </div>
            <div className="post">post 1</div>
            <div className="post">post 2</div>
            <div className="post">post 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default App;
