import {useState, useEffect} from 'react'; 
import {useParams, useNavigate, Link} from 'react-router-dom'; 

export function DataSearch(){

    const [data, setData] = useState(null); 
    const navigate = useNavigate(); 

    

    

    return (

        <form onSubmit = {() => {

            navigate("/data/" + data)


        }}>
            <div>
                <label htmlFor = "first_name" className = "block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input type = "text" onChange = {
                    (e) => {setData(e.target.value) }}>
                
                </input>
                <button type = "submit">Search</button>
            </div>
        </form>
    )
}