import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from "./components/Home/HomePage";
import Dashboard from './components/Admin/Content/DashBoard'
import ManageUser from './components/Admin/Content/ManageUser'
import Login from "./components/Auth/login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<HomePage />} />
        <Route path="users" element={<User />} />
      </Route>
      <Route path="admins" element={<Admin />} >
        <Route index element={<Dashboard />} />
        <Route path="manage-users" element={<ManageUser />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
