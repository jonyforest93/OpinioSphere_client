import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter,
} from 'react-router-dom';

import Head from "./components/head";
import Footer from "./components/footer";
import store from "./store/store";
import {Provider} from "react-redux";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Импорт вашей конфигурации i18n


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <>
          <BrowserRouter>
              <Provider store={store}>
                  <I18nextProvider i18n={i18n}>
                  <Head/>
                  <App/>
                  <Footer/>
                  </I18nextProvider>
              </Provider>
          </BrowserRouter>
      </>

  </React.StrictMode>
);

