import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './app.css'
import AdminDashboard from './pages/admin__dashboard/AdminDashboard';
import HomePage from './pages/home__page/HomePage'
import UserDashboard from './pages/user__dashboard/UserDashboard';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <div className="app__container">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/userDashboard" element={<UserDashboard />}></Route>
              <Route path="/adminDashboard" element={<AdminDashboard />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App