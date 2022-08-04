import { useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { User } from "./User"

export const HomePage = ({ users, setUsers }) => {

    const navigate = useNavigate();

    return (
        <div className="home_page">
            <section className="header">
                <Button className="createUser btn m-1" variant="success" onClick={() => navigate("/create-user")}>Create new user</Button>
            </section>
            <div className="user_div">
                {users?.map((user, index) => {
                    return <User user={user} users={users} setUsers={setUsers} key={user.id} />
                })}
            </div>
        </div>
    )
}
