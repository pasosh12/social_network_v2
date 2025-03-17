import {instance} from "../api/instance";

type ResponseType={
    resultCode:number,
    messages:string[],
    data:{
        id:number,
        login:string,
        email:string,
    }
}
export const authApi = {
    me () {
        return instance.get<ResponseType>(`/auth/me`);
    }
}