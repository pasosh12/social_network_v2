import React, {useEffect, useState} from 'react';
import {authApi} from "../../auth/authAPI";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
    const [login, setLogin] = useState<string | null>(null);
    useEffect(() => {
        try{
            authApi.me().then(res => {
                console.log(res.data.messages[0])
                if(res.data.resultCode===0){
                    setIsAuthorized(true)
                    setLogin(res.data.data.login)
                }
            })
        }
        catch{
            console.error()}
    }, [])
    return (
        <div style={{height: '50px', backgroundColor: 'blue'}} >

            {
                isAuthorized ?
                    <p>
                        {/*<div onClick={<Popup/>}>{login}</div>*/}
                        {login}
                    </p>
                    :
                    <div>
                        {/*<NavLink to={'/login'}>Log in</NavLink>*/}
                    </div>
            }
        </div>
    );
};

export default Header;
const Popup = () => {
    return(
        <div style={{}}>
            <a>My profile</a>
            <a>Log out</a>
        </div>
    )
}