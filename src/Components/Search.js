import axios from "axios";
import React from "react";
import {useParams, useNavigate, Link} from 'react-router-dom'; 
import {Company} from './Company'


// API KEY EMBPDVNX7PHRU487


export function Search(){

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
     
<div >

  <Company 
  Name = {post.Name} 
  AssetType = {post.AssetType} 
  Sector = {post.Sector} 
  Industry = {post.Industry}
  Description = {post.Description}
  _52WeekHigh = {post['52WeekHigh']}
  _52WeekLow = {post['52WeekLow']}
  _50DayMovingAverage = {post['50DayMovingAverage']}
  ></Company>
    
    </div>
     
  )

 } 
