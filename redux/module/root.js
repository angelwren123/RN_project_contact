import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";

import { getUsersEpic } from "./users";
import getUsersReducer from "./users";
import  {getUsersReFreshEpic} from "./users";
export const rootEpic = combineEpics(
    getUsersEpic,
    getUsersReFreshEpic
);

export const rootReducer = combineReducers({
    getUsersReducer,
});
