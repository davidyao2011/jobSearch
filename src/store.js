import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import jobsReducer from "../reducers/jobs";
import errorReducer from "../reducers/errors";

