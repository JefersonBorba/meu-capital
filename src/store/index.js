import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  authenticatedUserReducer,
  userAllowedReducer,
} from "./modules/authenticated-user/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  user: authenticatedUserReducer,
  isAllowed: userAllowedReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
