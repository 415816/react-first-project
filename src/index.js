import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'
import reactDom from 'react-dom';
import React from 'react';
import App from './App';
import {addNewMessage} from './redux/state'
import {addNewPost} from './redux/state'
import {changeNewPost} from './redux/state'
import {callbackrerender} from './redux/state'
 


export const rerenderAll = (state) => {
  reactDom.render(
    <React.StrictMode>
      <App arrPosts={state.arrPosts}
        collectPeople={state.collectPeople}
        collectMessages={state.collectMessages}
        sidebar={state.sidebar}
        addNewMessage={addNewMessage}
        addNewPost={addNewPost} 
        changeNewPost={changeNewPost} 
        newPost={state.newPost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

callbackrerender(rerenderAll);

rerenderAll(state);

reportWebVitals();
