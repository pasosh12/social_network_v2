import React from 'react';
import SideBarButton from "./SideBarButton";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <nav>
                <NavLink to="/profile" style={{marginRight: "10px"}}>My Profile</NavLink>
                <NavLink to="/messages" style={{marginRight: "10px"}}>Messages</NavLink>
                <NavLink to="/friends" style={{marginRight: "10px"}}>Friends</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
            {/*<SideBarButton title='My profle'/>*/}
        </div>
    );
};

export default Sidebar;