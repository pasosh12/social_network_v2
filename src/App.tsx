import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
// import apiClient, {setClientToken} from "./spotify";
import {Users} from "./component/users/Users";
import Header from "./component/header/Header";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Login} from "./auth/Login";
import {Profile} from "./component/profile/Profile";
import Sidebar from "./component/Sidebar";

function App() {
   useEffect(()=>{

   },[])

  return (
      // !token? <Login/>:
      <div className="App">
          <Header/>
         <Sidebar/>
          <Routes>

              <Route path={'/'} element={<Navigate to={'/users'}/>}/>
              {/*<Route path={'/app'} element={<App/>}/>*/}
              {/*<Route path={'/messages'} element={<Messages/>} />*/}
              {/*<Route path={'/friends'} element={<Friends/>} />*/}
              <Route path={'/friends'} element={<Users/>}/>
              {/*<Route path={'/profile'} element={<Profile />} />*/}
              <Route path={'/login'} element={<Login/>}/>
              <Route path={'/profile'} element={<Profile/>}/>
          </Routes>
          {/*<Users/>*/}
          {/*<header className="App-header">*/}
          {/*  <img src={logo} className="App-logo" alt="logo" />*/}
          {/*  <p>*/}
          {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
          {/*  </p>*/}
          {/*  <a*/}
          {/*    className="App-link"*/}
          {/*    href="https://reactjs.org"*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*  >*/}
          {/*    Learn React*/}
          {/*  </a>*/}
          {/*</header>*/}
      </div>
  );
}

export default App;
