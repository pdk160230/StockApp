import {useEffect, useState} from 'react'; 
import axios from "axios";


export  function User(){
    const [users, setUser] = useState(null); 
    useEffect(() => {
        console.log("Getting Users");
        axios.get(`http://localhost:8000/api/users`).then((response) =>{
            setUser(response.data.users);
            console.log(response.data.users); 
        })

    }, [])

    return (
        <>

<h1>USER</h1>

{users ? users.map((user) => {
   return  <h1>{user.name}</h1>
}) : null }

        
        
        </>
   
    )
}