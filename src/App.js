import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import { Offline } from "react-detect-offline";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store, history, persistor } from "./store";

import PublicRoutes from "@/routes/publicRoutes";

import { OfflineNotification, ErrorBoundary } from "@/components/blocks";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <div className="app-container" id="app-wrapper">
            <ConnectedRouter history={history}>
              <PublicRoutes />
            </ConnectedRouter>
          </div>
        </ErrorBoundary>

        <Offline>
          <OfflineNotification />
        </Offline>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </PersistGate>
    </Provider>
  );
};

export default App;
