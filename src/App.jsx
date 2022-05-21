import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './app.css'
import HomePage from './pages/home__page/HomePage'
import UserDashboard from './pages/user__dashboard/UserDashboard';
import Case__reported from './pages/user__dashboard/user__dashboard__components/Case__reported';
import New__Cases from './pages/user__dashboard/user__dashboard__components/New__Cases';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <div className="app__container">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/userDashboard" element={<UserDashboard />}></Route>
              <Route path="/userDashboard/cases" element={<Case__reported />}></Route>
              <Route path="/userDashboard/create__new__case" element={<New__Cases />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App