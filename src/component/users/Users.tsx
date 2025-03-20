import React, {ChangeEvent, useEffect, useState} from 'react';
import {usersApi} from "./usersApi";
import {useNavigate} from "react-router-dom";
import defaultImage from '../../assets/default-user.jpg'

export type UserType = {
    id: number,
    name: string,
    status?: string,
    photos: {
        small?: string,
        large?: string,
    },
    followed: boolean,
}
export const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState<UserType[]>([]);
    const [currentPage, setCurentPage] = useState<number>(1);
    const [pagesTotalCount, setPagesTotalCount] = useState<number>(1);
    const [membersOnPage, setMembersOnPage] = useState<number>(10);
    useEffect(  () => {
           usersApi.getUsers(membersOnPage, currentPage).then((res) => {
                // debugger
                if (res.status === 200) {
                    setUsers(res.data.items)
                    setPagesTotalCount(Math.floor(res.data.totalCount/membersOnPage))
                }
                console.log(res);
            }
        )
    }, [currentPage,membersOnPage])

    const onDecPage = () => {
        if (currentPage !==1) setCurentPage(currentPage - 1);
    }
    const onIncPage=()=>{
        setCurentPage(currentPage + 1)
    }
    const handleSelectchange = (event:ChangeEvent<HTMLSelectElement>)=>{
        setMembersOnPage(Number(event.target.value))
    }
    const onUserClick=(id:number)=>{
        // <Navigate to={<Profile/>}/>
        navigate(`/profile/${id}`)
        // <Profile userId={id}/>
    }
    return (
        <div>
            <ul style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
                listStyleType: "none",
                padding: 0
            }}>
                {users.map((u) => (
                    <li key={u.id} style={{display: "flex", alignItems: "center"}}>
                        {u.photos.small ? (
                            <img
                                src={u.photos.small}
                                alt={u.name}
                                style={{width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px"}}
                            />
                        )
                            :
                            <img style={{width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px"}}
                                 alt={u.name}
                                 src={defaultImage}/>
                        }
                        <span
                        style={{cursor:"pointer"}}
                            onClick={()=>onUserClick(u.id)}>{u.name}</span>
                    </li>
                ))}
            </ul>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button disabled={currentPage === 1} onClick={onDecPage}> {'<='}</button>
                <div>{`Page number ${currentPage} of ${pagesTotalCount}`}</div>
                <div>Users on page
                    <select onChange={handleSelectchange}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                        <option value={50}>50</option>
                    </select>
                </div>
                <button onClick={onIncPage}> {'=>'}</button>
            </div>
        </div>
    );
};

