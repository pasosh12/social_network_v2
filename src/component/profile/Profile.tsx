import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {profileAPI} from "./profileAPI";
import {useParams} from "react-router-dom";
import EditableSpan from "../EditableSpan";
import {createEmptyProfile,} from "./createEmptyProfile";
import isEqual from 'fast-deep-equal';

export type ProfileType = {
    userId: number,
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string,
    },
    photos: {
        small?: string,
        large?: string,
    }
}
type PropsType = {
    userId?: number,
}
export const Profile = (props: PropsType) => {
    const {id} = useParams<{ id: string }>();
    const [profileEdited, setProfileEdited] = useState(false);
    const emptyProfile = useMemo(() => createEmptyProfile(), [])
    const [serverProfile, setServerProfile] = useState<ProfileType>(emptyProfile);
    const [profile, setProfileData] = useState<ProfileType>(emptyProfile)

    useEffect(() => {
        try {
            profileAPI.getUser(Number(id) || 20230).then(data => {
                console.log('got data: ', data.data)
                // setProfileData(data.data)
                setProfileData(data.data)
                setServerProfile(data.data)
            })

        } catch {
            console.log("Error getting user data");
        }
    }, [id])
    useEffect(() => {
        setProfileEdited(
            !isEqual(serverProfile, profile)
        )
    }, [profile, serverProfile])
    // const updateProfile = async () => {
    //     try {
    //         await profileAPI.updateProfile(profile).then(r => {
    //             console.log('update profile info: ', r.data)
    //             setProfileData(r.data)
    //         })
    //     } catch (e) {
    //         console.error('update profile error ', e)
    //     }
    // }
    const updateStatus = (newStatus: string) => {
        try {
            profileAPI.updateStatus(newStatus)
        } catch (e) {
            console.error(e)
        }
    }
    const updateProfileData = useCallback((field: string, value: any) => {
        setProfileData((profile) => ({
                ...profile,
                [field]: value
            })
        )
        // updateProfile(profile)
    }, [profile])


    const updateNestedField = useCallback((section: string, field: string, value: any) => {
        const newProfileData = structuredClone(profile)
        if (newProfileData[field] !== value) {
            newProfileData[section][field] = value
            setProfileData(newProfileData)
        }
    }, [setProfileData, profile])

    const handleStatusChange = useCallback((newStatus: string) => {
        updateProfileData('aboutMe', newStatus)
    }, [updateProfileData])
    const uploadPhoto = (file: any) => {

    }

    console.log('profile component render')

    if (!profile) {
        return <div>Loading...</div>;
    } else return (

        <div>
            <div>{id}</div>
            <div>Full Name: {profile.fullName}</div>
            <div><img src={profile.photos.large}/></div>
            {/*<button onClick={() => uploadPhoto(a)}>Upload Photo</button>*/}
            <div>About Me:
                <EditableSpan onChange={(newValue: string) => handleStatusChange(newValue)}
                              value={profile.aboutMe}/>
            </div>

            Contacts:
            <ul>
                {Object.entries(profile.contacts).map(([key, value]) => (
                    <li key={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                        <EditableSpan
                            value={value || "empty"}
                            onChange={(e) => updateNestedField("contacts", key, e)}
                        />

                    </li>
                ))}

            </ul>
            <div>
                <input type={'checkbox'} checked={profile.lookingForAJob}/>
                <span
                    style={{opacity: profile.lookingForAJobDescription ? 0.5 : 0.5}}> Looking for a job: "{profile.lookingForAJobDescription}"</span>
                {
                    profileEdited ?
                        // <button onClick={updateProfile}>Save Profile Info</button>
                        <button>Save Profile Info</button>
                        : <></>
                }

            </div>
        </div>
    );
};

