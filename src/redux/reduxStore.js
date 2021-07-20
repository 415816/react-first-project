import {combineReducers, createStore} from "redux";
import messagesReduser from "./messagesReduser";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let reducers = combineReducers({
        messagePage: messagesReduser,
        profilePage: profileReducer,
        sideBar: sidebarReducer
    }
);

let store = createStore(reducers);

export default store;