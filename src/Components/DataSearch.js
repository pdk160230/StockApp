import {useState, useEffect} from 'react'; 
import {useParams, useNavigate, Link} from 'react-router-dom'; 

export function DataSearch(){

    const [data, setData] = useState(null); 
    const navigate = useNavigate(); 


    return (

        <form onSubmit = {() => {

            navigate("/data/" + data)


        }}>
            <div >
                <label htmlFor = "input" className = " flex justify-center text-3xl p-4 my-2 mx-2 mt-4 text-gray-900 dark:text-white font-bold tracking-tight leading-none">Search Company</label>
                <div className = "p-4 flex justify-center ">
                
               
                <input type = "text" className = "bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
                onChange = {
                    (e) => {setData(e.target.value) }}>
                
                </input>
               
                <button type = "submit" className = " bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" > Search </button>
                </div>
            </div>
        </form>
    )
}