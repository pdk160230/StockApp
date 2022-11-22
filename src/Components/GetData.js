import axios from "axios";
import React from "react";

// API KEY EMBPDVNX7PHRU487


export function GetData(){
const url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=EMBPDVNX7PHRU487' 

const [post, setPost] = React.useState(null); 


 React.useEffect(() => {
   axios.get(url).then((response) => {
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
