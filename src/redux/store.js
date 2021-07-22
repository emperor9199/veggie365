import {
  userLoginReducer,
  userRegistrationReducer,
  userUpdateReducer,
} from "./reducers/userReducer";
import { addToCartReducer } from "./reducers/cartReducer";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  userLoginReducer,
  userRegistrationReducer,
  userUpdateReducer,
  addToCartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
