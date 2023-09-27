import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter,
} from 'react-router-dom';
import store from "./store/store";
import {Provider} from "react-redux";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import {ThemeProvider} from "./ThemeContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <>
          <BrowserRouter>
              <Provider store={store}>
                  <ThemeProvider>
                      <I18nextProvider i18n={i18n}>
                          <App/>
                      </I18nextProvider>
                  </ThemeProvider>
              </Provider>
          </BrowserRouter>
      </>
  </React.StrictMode>
);

