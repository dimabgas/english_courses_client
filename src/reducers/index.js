import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user";
import coursesReducer from "./courses";
import lessonReducer from "./lessons";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userData", "isAuthenticated"],
};

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: persistReducer(userPersistConfig, userReducer),
    courses: coursesReducer,
    lessons: lessonReducer,
  });
