import './index.css';
import reportWebVitals from './reportWebVitals';
// import store from './redux/store'
import reactDom from 'react-dom';
import React from 'react';
import App from './App';
import store from "./redux/reduxStore";

export const rerenderAll = () => {
  reactDom.render(
    <React.StrictMode>
      <App arrPosts={store.getState().profilePage.arrPosts}
        collectPeople={store.getState().messagePage.collectPeople}
        collectMessages={store.getState().messagePage.collectMessages}
        sidebar={store.getState().sideBar}
        dispatch={store.dispatch.bind(store)}
        newPost={store.getState().profilePage.newPost}
        newMessage={store.getState().messagePage.newMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};


// export const rerenderAll = () => {
//   reactDom.render(
//     <React.StrictMode>
//       <App arrPosts={store.getState().arrPosts}
//         collectPeople={store.getState().collectPeople}
//         collectMessages={store.getState().collectMessages}
//         sidebar={store.getState().sidebar}
//         dispatch={store.dispatch.bind(store)}
//         newPost={store.getState().newPost}
//         newMessage={store.getState().newMessage} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// };

store.subscribe(rerenderAll);
rerenderAll(store.getState());

reportWebVitals();
