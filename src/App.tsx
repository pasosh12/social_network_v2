import React from 'react';
import './App.css';
// import apiClient, {setClientToken} from "./spotify";
import {Users} from "./component/users/Users";
import Header from "./component/header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./auth/Login";
import {Profile} from "./component/profile/Profile";
import Sidebar from "./component/Sidebar";

function App() {


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
              <Route path={'/profile/:id'} element={<Profile/>}/>
          </Routes>

      </div>
  );
}

export default App;
