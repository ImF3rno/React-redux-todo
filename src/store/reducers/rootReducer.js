import { combineReducers } from "redux";
import Todos from "./TodoReducers";

const rootReducer=combineReducers({
    todos:Todos
})

export default rootReducer