import axios from 'axios';
import {useState, useContext} from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';



export function Register(){

   // const [loggedIn, setLoggedIn] = useContext(LoginContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate(); 


    
    function register(e){
        e.preventDefault(); 
        const url ='http://localhost:8000/api/register/';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json' 
            },
            body: JSON.stringify({
                email: email,
                username: username, 
                password: password
            })
        }).then((reponse) =>{
            return reponse.json(); 
        }).then((data) => {
            console.log(data);
            navigate( '/login' )
        })
        
    }
    return(
        <form className = "w-full max-w" id = "user" onSubmit = {register}>

<div className = "flex justify-center my-6">
                <div >
                    <label htmlFor = "email">Email </label>
                </div>
          

            <input 
            className = "flex justify-center border-2 border-blue-500 rounded text-md p-2 mx-2 ml-11 text-gray-900 dark:text-white tracking-tight leading-none"
            id = "email" 
            type = "text" 
            value = {email}
            onChange = {(e) =>{
                setEmail(e.target.value); 
                console.log(e.target.value);
            }}>
                  </input>

                  </div>
            <div className = "flex justify-center my-6">
                <div>
                    <label htmlFor = "username">Username </label>
                </div>
           

            <input 
            className = "flex justify-center border-2 border-blue-500 rounded text-md p-2 mx-2 text-gray-900 dark:text-white tracking-tight leading-none"
            id = "username" 
            type = "text" 
            value = {username}
            onChange = {(e) =>{
                setUsername(e.target.value); 
                console.log(e.target.value);
            }}>
                  </input>

                  </div>

            <div className = "flex justify-center my-6" > 

                <div htmlFor = "password">
                    Password
                </div>

            <input 
            className = "flex justify-center border-2 border-blue-500 rounded text-md p-2 mx-2 text-gray-900 dark:text-white tracking-tight leading-none"
            id = "password"
            type = "password"
            value = {password}
            onChange = {(e) =>{
                setPassword(e.target.value); 
            }}
            
            >
            
            </input>

            </div>

            <div className = "flex justify-center">
            <button 
            className = "flex justify-center bg-blue-500 hover:bg-blue-800 text-white font-bold my-4 ml-10 py-2 px-4 rounded">
                Register

            </button>

            </div>
        </form>
    )
}