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
    updateProfile(profile: ProfileType) {

        return instance.put<BaseResponse>('/profile',
            {...profile}
        )
    },
    updateStatus(newStatus: string,) {
        return instance.put<BaseResponse>(`/profile/status`, {status: newStatus})
    },

    uploadPhoto(file: File) {
        const formData = new FormData();
        formData.append("photos", file);
        return instance.put('/profile/photo', formData, {
            headers: {
                ...instance.arguments.headers,
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}