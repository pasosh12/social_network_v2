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
    useEffect(() => {
        try {
            authApi.me().then((res) => {
                if (res.status === 200) console.log('authorized')
                else console.log(res)
            })

        } catch (e) {
            console.error(e)
        }
    }, [])

    const onEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    loginApi.login(email, password, rememberMe).then((res) => {

            console.log(res.data.messages);
        }
    )

    return (
        <div>
            <form>
                <input onChange={(e) =>
                    onEmailHandler(e)} type={"email"} placeholder={'Enter email'}></input>

                <input onChange={onPasswordHandler} type={'password'} placeholder={'Enter password'}></input>
                Remember me <input type={'checkbox'}/>
                <button type={'submit'}>Log In</button>
            </form>
            {/*<a href={loginEndpoint}>*/}
            {/*</a>*/}
        </div>
    );
}

