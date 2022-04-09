import Topbar from "./Components/topbar/topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Home from './pages/home/Home';
import Single from "./pages/single/single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import { Context } from "./context/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Contact from "./pages/contact/contact";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
       <Topbar/>
      <Routes>
        <Route exact path="/"
       element={<Home/>}/>

         <Route  path="/register"
       element={user? <Home/> :<Register/>}/>

         <Route  path="/login"
       element={user ? <Home /> :<Login />}/>

         <Route  path="/write"
       element={user ? <Write/> : <Register/>}/>

<Route  path="/settings"
       element={user ?<Settings />:<Register/>}/>

<Route  path="/post/:postId"
       element={<Single/>}/>

<Route  path="/contact"
       element={<Contact/>}/>

      </Routes>
    
   
    

    
    </Router>
  );
}

export default App;
