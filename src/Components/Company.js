import {useState, useEffect} from 'react'; 
import {useParams, useNavigate, Link} from 'react-router-dom'; 
import axios from "axios";


export function Company(){

    const {company} = useParams(); 

    const [post, setPost] = useState(false); 

    useEffect(() => {
        axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${company}&apikey=EMBPDVNX7PHRU487` ).then((response) => {
          setPost(response.data); 
          console.log(response.data);
        });
      }, []); 



    return (
        <div>
    <h1>{post.Name}</h1>
    <p>{post.AssetType}</p>
    <p>{post.Description}</p>
    <p>{post.Sector}</p>
    <p>{post.Industry}</p>
    </div>
   )
}