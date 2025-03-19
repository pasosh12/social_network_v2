import {ProfileType} from "./Profile";

export const createEmptyProfile = (): ProfileType => ({
    userId: 0,
    aboutMe: "",
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    contacts: {
        github: "",
        vk: "",
        facebook: "",
        instagram: "",
        twitter: "",
        website: "",
        youtube: "",
        mainLink: "",
    },
    photos: {
        small: undefined,
        large: undefined,
    },
});
