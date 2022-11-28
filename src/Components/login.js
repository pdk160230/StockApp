import axios from 'axios';
import {useState, useEffect, useContext} from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import {LoginContext} from '../App';




export function Login(){
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate(); 

    const [loggedIn, setLoggedIn] = useContext(LoginContext); 



    useEffect(() => {
        //console.log(location.state.previousURL); 
    })

    
    function login(e){
        e.preventDefault(); 
        const url ='http://localhost:8000/api/token/';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json' 
            },
            body: JSON.stringify({
                username: username, 
                password: password
            })
        }).then((reponse) =>{
            return reponse.json(); 
        }).then((data) => {
            localStorage.setItem('access', data.access);
            localStorage.setItem('refresh', data.refresh);
            setLoggedIn(true);

           navigate( '/search' )

            console.log(localStorage);
        })
        
    }
    return(
        <form className = "w-full max-w" id = "user" onSubmit = {login}>
            <div className = "flex justify-center my-6">
                
                    <label htmlFor = "username">Username </label>
          
            

            <input 
            className = "flex justify-center border-2 border-blue-600 rounded text-md p-2 mx-2 text-gray-900 dark:text-white tracking-tight leading-none"
            id = "username" 
            type = "text" 
            value = {username}
            onChange = {(e) =>{
                setUsername(e.target.value); 
                console.log(e.target.value);
            }}>
                  </input>

                  </div>

                  <div className = "flex justify-center"> 
                 

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
            className = "flex justify-center bg-blue-500 hover:bg-blue-800 text-white font-bold my-6 ml-10 py-2 px-4 rounded">
                Login

            </button>

            </div>
        </form>
    )
}