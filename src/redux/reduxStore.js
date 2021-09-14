import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReduser from "./messagesReduser";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({
        messagePage: messagesReduser,
        profilePage: profileReducer,
        sideBar: sidebarReducer,
        usersPage: usersReducer,
        authReducer: authReducer,
        form: formReducer,
        appReducer: appReducer,
    }
);

let store = createStore(reducers, applyMiddleware(thunk));


window.store = store;
export default store;