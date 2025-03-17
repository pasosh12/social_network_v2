import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./auth/Login";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // // <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    // //         <Route path={'/'} element={<Navigate to={'/app'}/>} />
    // //         <Route path={'/app'} element={<App/>}/>
    //         {/*<Route path={'/messages'} element={<Messages/>} />*/}
    //         {/*<Route path={'/friends'} element={<Friends/>} />*/}
    //         {/*<Route path={'/profile'} element={<Profile />} />*/}
    //         // <Route path={'/login'} element={<Login/>}/>
    //         // <App/>
    //     // </Routes>
    // // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
