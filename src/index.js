import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import App from "./components/App";
import "./styles/index.sass";
import EmailsStoreService from "./services/emailsStore-service";
import {EmailsStoreServiceProvider} from "./components/emailsStore-service-context";
import store from "./store";

const emailsStoreService = new EmailsStoreService();

ReactDOM.render(
  <Provider store={store}>
    <EmailsStoreServiceProvider value={emailsStoreService}>
      <App />
    </EmailsStoreServiceProvider>
  </Provider>,
  document.getElementById("root"),
);
