import {combineReducers, createStore} from "redux";
import messagesReduser from "./messagesReduser";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
        messagePage: messagesReduser,
        profilePage: profileReducer,
        sideBar: sidebarReducer,
        usersPage: usersReducer
    }
);

let store = createStore(reducers);


window.store = store;
export default store;