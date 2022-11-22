import {useState, useEffect} from 'react'; 


export function DataSearch(){

    const [data, setData] = useState(null); 

    

    return (

        <form onSubmit = {() => {

        }}>
            <div>
                <label htmlFor = "first_name" className = "block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input type = "text" onChange = {
                    (e) => {setData(e.target.value) }}>
                
                </input>
                <button>Search</button>
            </div>
        </form>
    )
}