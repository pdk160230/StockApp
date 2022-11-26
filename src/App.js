import './App.css';




import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Search } from './Components/Search';
import {DataSearch} from './Components/DataSearch'; 
import {Header} from './Components/Header'; 
import {Company} from './Components/Company'
import {NotFound} from './Components/NotFound'


function App() {

  return (
    <BrowserRouter>
    <Header></Header>
    
    
    <Routes>
      <Route path = "/search" element = {<DataSearch/>}> </Route>
      <Route path = "/data" element = {<Search/>}> </Route>
      <Route path ='/data/:search' element = {<Search/>}/>
      <Route path ='/data/back' element = {<DataSearch/>}/>
      <Route path ='/back' element = {<DataSearch/>}/>
      <Route path ='/404' element = {<NotFound />}/>
     <Route path ='*' element = {<NotFound />}/>
    </Routes>

    
    
    </BrowserRouter>


    
   
  )



 


}

export default App;
