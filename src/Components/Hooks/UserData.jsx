import React, { useEffect,useState } from "react";
import axios from "axios";
const UserData=()=>{
    const [user,setUser]=useState([]);
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then( (res)=>{
       setUser(res.data);
      }
    )
      .catch((err)=>{
        console.log(err)

      })
    },[]);
    return(
        <div  className="m-3">
            <p>UserData:{user.length} </p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>Email</th>
                        <th>phone</th>
                        <th>address</th>
                        <th>company</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((u,i)=>{
                          return(
                            <tr>
                                <td>{u.name}</td>
                                <td>{u.phone}</td>
                                <td>{u.email}</td>
                                <td>{u.address.city}</td>
                                <td>{u.company.name}</td>
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
export default UserData
