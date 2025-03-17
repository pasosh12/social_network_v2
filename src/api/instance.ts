import axios from "axios";
const token = 'c453cd94-112f-4d72-aac7-9ce61bbe285f'
const apiKey = '8c881c3f-ac4e-4bb3-ad5a-56edec988ece'

export const instance=axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",

    headers:{
        Authorization:`Bearer ${token}`,
        // "API_KEY":apiKey
    }
})