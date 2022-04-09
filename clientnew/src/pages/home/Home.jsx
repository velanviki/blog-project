import './home.css';
import Header from "../../Components/header/header.jsx";
import Posts from "../../Components/posts/posts";
import Sidebar from "../../Components/sidebar/sidebar";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Contact from "../contact/contact";

import axios from '../../apiConnect'

export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();


  useEffect(() => {
const fetchPosts = async () => {
 const res = await axios.get("/posts" + search)
 setPosts(res.data)
}
fetchPosts()
  },[search]);
  return (
      <>
           <Header/>
    <div className='home'>
   <Posts posts={posts}/>
   
    </div>
    <Sidebar/>
    <Contact/>
    </>
  )
}
