import './App.css';




import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Search } from './Components/Search';
import {DataSearch} from './Components/DataSearch'; 
import {Header} from './Components/Header'; 
import {Company} from './Components/Company'; 
import {NotFound} from './Components/NotFound'; 
import {User} from './Components/User'; 
import {Login} from "./Components/login";
import {Register} from "./Components/Register";
import {createContext, useState} from 'react'; 
import {Logout} from "./Components/Logout";
import {UserProfile} from "./Components/UserProfile";


export const LoginContext = createContext(); 


function App() {

  const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false); 

  return (
   
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
    <BrowserRouter>
    <Header></Header>
    
    
    <Routes>
      <Route path = "/search" element = {<DataSearch/>}> </Route>
      <Route path = "/home" element = {<DataSearch/>}> </Route>
      <Route path = "/data" element = {<Search/>}> </Route>
      <Route path ='/data/:search' element = {<Search/>}/>
      <Route path ='/data/back' element = {<DataSearch/>}/>
      <Route path ='/back' element = {<DataSearch/>}/>
      <Route path ='/404' element = {<NotFound />}/>
      <Route path = '/users' element = {<User/>}></Route>
      <Route path = '/login' element = {<Login/>}></Route>
      <Route path = '/logout' element = {<Logout/>}></Route>
      <Route path = '/register' element = {<Register/>}></Route>
      <Route path = '/MyProfile' element = {<UserProfile/>}></Route>
     <Route path ='*' element = {<NotFound />}/>
    </Routes>

    
    
    </BrowserRouter>
    </LoginContext.Provider>


    
   
  )



 


}

export default App;
