import {useState, useEffect} from 'react'; 
import {useParams, useNavigate, Link} from 'react-router-dom'; 
import axios from "axios";
import {Search} from './Search'


export function Company(props){

    return (


        <div>

    <h1 className = "flex justify-center text-3xl p-8">{props.Name}</h1>

    <div>
        <div className = "flex flex-wrap justify-center items-center mr-4">

    

    <ul className=" flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
    
      <li> 
        <a className = "py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"> 
      Asset Type: {props.AssetType} </a> 
      </li>
   
      <li> 
        <a className = "py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">Sector: {props.Sector} </a> </li>
    
      <li> 
        <a className = "py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">Industry: {props.Industry}</a></li>
   
      <li> 
        <a className = "py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"> 52 Week High: {props._52WeekHigh} </a></li>
   
      <li> 
        <a className = "py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">52 Week Low: {props._52WeekLow} </a> </li>
    
      <li> 
        <a className = "py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"> Average: {props._50DayMovingAverage} </a> </li>
   
    
    

    </ul>
   
    </div>
    <p className = "text-center py-2 px-2 rounded-t-lg mx-10" >{props.Description}</p>
    </div>
    </div>
   )
}