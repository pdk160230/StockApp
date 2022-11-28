import {LoginContext} from '../App';
import {useState, useEffect, useContext} from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';



export function Logout(){

    const [loggedIn, setLoggedIn] = useContext(LoginContext); 

    const navigate = useNavigate(); 


    return (
        <form>
            <div className = "flex justify-center">

            <button className = "flex justify-center bg-blue-500 hover:bg-blue-800 text-white font-bold my-6 ml-10 py-2 px-4 rounded" onClick = {() =>{
                console.log("Log out"); 
                setLoggedIn(false); 
                localStorage.clear(); 
                navigate('/search');

                
            }}> Log Out
               
            </button>

            </div>
        </form>
    )
}