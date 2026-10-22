import axios from "axios";

import React, { useEffect, useState } from "react";


const UsersData = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res.data)
                setUsers(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div className=" container p-5">
            <p>userdata:{users.length}</p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Userid</th>
                        <th>Title</th>
                        <th>Id</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, i) => {
                            return (

                                <tr key={i}>
                                    <td>{u.userId}</td>
                                    <td>{u.title}</td>
                                    <td>{u.id}</td>
                                    <td>{u.body}</td>
                                </tr>
                            )
                        }

                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersData

