import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css";
import { Context } from "../../context/Context";
import { useContext } from "react";


function Topbar() {

  const {user,dispatch } = useContext(Context);
  const PF = "https://blogs-viki.herokuapp.com/images/";

  // const user =false

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className='top'>
      
      <div className='topleft'>
          <ul className='topList'>
              <li className='topListItem'><a className='link' href="/#home" >HOME</a></li>
              <li className='topListItem'><a href='/#about' className='link'> ABOUT </a></li>
              <li className='topListItem'><a className='link' href="/#contact" >CONTACT</a></li>
              <li className='topListItem'><Link className='link' to="/write">CREATE</Link></li>
              <li className='topListItem'><Link className='link' to="/login" onClick={handleLogout}> {user && "LOGOUT"}</Link> </li>

          </ul>
      </div>
      <div className='topright'>
      {/* <i className='topSearchIcon fas fa-search'></i> */}

      {
        user?(
          <Link to="/settings">
          <img className='topImg'
        src={PF+user.profilePic}
        alt=""/>
        </Link>
        ):(
          <ul className='topList'>
            <li className='topListItem'>
            <Link className='link' to='/login'>LogIn</Link>
            </li>
         
            <li className='topListItem'>
            <Link className='link' to='/register'>Register</Link>
            </li>
            

            </ul>
        )
      }


    </div>
    </div>
  )
}

export default Topbar;