import React from 'react'
import './App.css';
import Header from './components/Header/header';
import { Routes, Route } from "react-router-dom";
import SignIn from './components/SignIn/signin';
import ItJobs from './components/ItJobs/ITJobs';
import CoreJobs from './components/CoreJobs/core';
import Marketing from './components/Marketing/marketing';
import Sales from './components/Sales/sales';
import Home from './components/home';
function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path='/Home'element={<Home/>}></Route>
        <Route path='/It jobs' element={<ItJobs />}></Route>
        <Route path='/Core jobs' element={<CoreJobs/>}></Route>
        <Route path='/Marketing' element={<Marketing/>}></Route>
        <Route path='/sales' element={<Sales/>}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
      </Routes>

    </div>
  );
}

export default App;
