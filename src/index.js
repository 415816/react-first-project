import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom'
import App from './App';
import store from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


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

