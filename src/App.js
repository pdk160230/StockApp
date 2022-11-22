import './App.css';




import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { GetData } from './Components/GetData';
import {DataSearch} from './Components/DataSearch'; 


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/search" element = {<DataSearch/>}> </Route>
      <Route path = "/data" element = {<GetData/>}> </Route>
    </Routes>
    
    </BrowserRouter>


    
   
  )



 


}

export default App;
