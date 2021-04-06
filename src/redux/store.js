import { createStore, combineReducers } from "redux";
import sidebarReducer from "./Sidebar/Sidebar.reducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

const store = createStore(rootReducer);

export default store;
