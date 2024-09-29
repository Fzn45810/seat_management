import './bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import TablePage from "./Pages/TablePage";
import "./App.css"


ReactDOM.render(<AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Table"
          element={
            <PrivateRoute>
              <TablePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  </AuthProvider>, document.getElementById('app'));
