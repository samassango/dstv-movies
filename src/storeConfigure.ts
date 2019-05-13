import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "./reducer";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const loggerMiddleware = createLogger();

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    // appReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
