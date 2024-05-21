import {createStore} from "redux";
import allReducers from "./redux/reducer/allReducers"

const store=createStore(
    allReducers,
  );
  store.getState();


export default store;
  