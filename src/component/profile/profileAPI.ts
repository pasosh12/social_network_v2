import {instance} from "../../api/instance";
import {ProfileType} from "./Profile";

export type GetUserResponseType = {
    photos: {
        small?: string,
        large?: string,
    }
} & ProfileType

type BaseResponse = {
    resultCode: number;
    messages: string[];
    data: {}
}
export const profileAPI = {
    getUser(userId: number) {
        return instance.get <GetUserResponseType>(`/profile/${userId}`)
    },
    updateProfile(
        userId: number,
        aboutMe: string,
        lookingForAJob: boolean,
        lookingForAJobDescription: string,
        fullName: string,
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string,
    ) {

        return instance.put<BaseResponse>('/profile',
            {
                aboutMe,
                userId: 20230,
                lookingForAJob, lookingForAJobDescription, fullName,
                contacts: {
                    github, vk, facebook, instagram,
                    twitter, website, youtube, mainLink,

                }


            })
    },
    updateStatus(newStatus: string,) {
        return instance.put<BaseResponse>(`/profile/status`, {newStatus})
    }
}