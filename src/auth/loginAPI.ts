import {instance} from "../api/instance";

type loginResponseType = {
    messages: string[],
    data: {} | null
}& BaseResponseType

type BaseResponseType = {
    resultCode: number;
}
export const loginApi = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<loginResponseType>(`/auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.post<BaseResponseType>(`/auth/logout`);
    }
}