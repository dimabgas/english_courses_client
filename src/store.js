import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./reducers";
import mySaga from "./sagas";

const persistConfig = {
  key: "englishCourses",
  storage,
  whitelist: ["router"],
};

const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware, routeMiddleware);

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const store = createStore(persistedReducer, composeWithDevTools(middleware));
const persistor = persistStore(store);

sagaMiddleware.run(mySaga);

export { store, persistor, history };
