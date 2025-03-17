import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from 'react';
import {usersApi} from "../component/users/usersApi";
import {loginApi} from "./loginAPI";
import {authApi} from "./authAPI";

type PropsType = {
    isAuthorized?: boolean;
}
export const Login = (props: PropsType) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setrememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [authorized, setAuthorized] = useState<boolean>(false);
    // useEffect(() => {
    const onInputHandler = (e: ChangeEvent<HTMLInputElement> ) => {

    }
    loginApi.login(email, password, rememberMe).then((res) => {

            console.log(res);
        }
    )

return (
    <div>
        <div>
            <input onChange={(e)=>onInputHandler(e)} type={"email"} placeholder={'Enter email'}></input>

            <input onChange={onInputHandler} type={'password'} placeholder={'Enter password'}></input>
            Remember me <input onChange={onInputHandler} type={'checkbox'}/>
        </div>
        {/*<a href={loginEndpoint}>*/}
        <a>Log In</a>
        {/*</a>*/}
    </div>
);
}

