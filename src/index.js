import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import reactDom from 'react-dom';
import React from 'react';
import App from './App';


export const rerenderAll = () => {
  reactDom.render(
    <React.StrictMode>
      <App arrPosts={store.getState().arrPosts}
        collectPeople={store.getState().collectPeople}
        collectMessages={store.getState().collectMessages}
        sidebar={store.getState().sidebar}
        dispatch={store.dispatch.bind(store)}
        newPost={store.getState().newPost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

store.rerenderAll(rerenderAll);

rerenderAll(store.getState());

reportWebVitals();
