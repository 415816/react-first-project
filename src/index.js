import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

ReactDOM.render(
  <React.StrictMode>
    <App  arrPosts={state.arrPosts} 
          collectPeople={state.collectPeople} 
          collectMessages={state.collectMessages}
          sidebar={state.sidebar}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
