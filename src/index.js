import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Layout from "./Layout";

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import 'nprogress/nprogress.css'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </PersistGate>

  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
