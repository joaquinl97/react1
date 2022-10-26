import "./Users.css"
import { useEffect, useState } from "react";
import axios from "axios";
import Card2 from "../../../components/card/Card2/Card2";

function Users() {
    const [users, setUsers]=useState([]);
    useEffect(() => {
        getUsers()
    }, []);

    async function getUsers() {
        let {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data);
        console.log(data);
        
    }
    let userMap= users.map((item)=><Card2 name={item.name} email={item.email} phone={item.phone} city={item.address.city}/>)
    return(
        <div>{userMap}</div>
    )
    
}
export default Users;