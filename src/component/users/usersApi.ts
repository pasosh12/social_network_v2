import {instance} from "../../api/instance";
import type {UserType} from "./Users";

type ResponseType={
    items: Array<UserType>,
    totalCount:number,
    error:string,

}
export const usersApi = {
    getUsers (count: number, pageNumber: number ) {
        return instance.get<ResponseType>(`/users?count=${count}&page=${pageNumber}`);
    }
}
//