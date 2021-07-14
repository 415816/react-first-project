import { combineReducers, createStore } from "redux";

let reducers = combineReducers(
    dilogReducer(),
    profileReducer(),
    sidebarReducer()
);
let store = createStore(reducers);

export default store;