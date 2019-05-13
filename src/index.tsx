import * as React from "react";
import * as ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import { Provider } from "react-redux";
import configureStore from "./storeConfigure";

import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
