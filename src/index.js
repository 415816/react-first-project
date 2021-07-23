import './index.css';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import React from 'react';
import App from './App';
import store from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

export const rerenderAll = () => {
    reactDom.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

store.subscribe(rerenderAll);
rerenderAll(store.getState());

reportWebVitals();

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

