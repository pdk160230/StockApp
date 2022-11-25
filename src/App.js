import './App.css';




import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { GetData } from './Components/GetData';
import {DataSearch} from './Components/DataSearch'; 
import {Header} from './Components/Header'; 
import {Company} from './Components/Company'


function App() {

  return (
    <BrowserRouter>
    
    <Routes>
      <Route path = "/search" element = {<DataSearch/>}> </Route>
      <Route path = "/data" element = {<GetData/>}> </Route>
      <Route path ='/data/:search' element = {<GetData/>}/>
      <Route path = '/:company' element = {<Company/>}/> 
    </Routes>
    
    
    </BrowserRouter>


    
   
  )



 


}

export default App;
