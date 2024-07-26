
import reducers from "./reducers/Combine";
import { applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk"
export const store = createStore(reducers, {}, applyMiddleware(thunk))