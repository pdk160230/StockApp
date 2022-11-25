import axios from "axios";
import React from "react";
import {useParams, useNavigate, Link} from 'react-router-dom'; 


// API KEY EMBPDVNX7PHRU487


export function GetData(){

const [post, setPost] = React.useState(null); 

let {search} = useParams(); 


 React.useEffect(() => {
   axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${search}&apikey=EMBPDVNX7PHRU487` ).then((response) => {
     setPost(response.data); 
     console.log(response.data);
   });
 }, []); 

 if (!post) return null; 

 return (
    <div>
 
  <h1>{post.Name}</h1>
  <p>{post.Symbol}</p>
  <p>{post.Description}</p>
    
    </div>
  )

 } 
