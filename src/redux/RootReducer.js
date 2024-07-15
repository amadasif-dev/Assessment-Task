import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./UserReducer";

export default combineReducers({
  userReducer: userReducer,
})

