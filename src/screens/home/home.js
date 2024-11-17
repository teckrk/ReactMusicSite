import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from '../feed/feed'
import Trendings from '../trending/trendings'
import Favorites from '../favorites/favorites'
import Player from '../player/player'
import Library from '../library/library'
import './home.css'
import Sidebar from '../../components/sidebar'
import Login from '../auth/login'
import { setClientToken } from '../../spotify'

export default function Home() {
  const [token , setToken] = useState("");

  useEffect(()=> {
    const token = window.localStorage.getItem("token") 
    const hash = window.location.hash;
    window.location.hash = "";
    if(!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token)
    } else {
      setToken(token);
      setClientToken(token)
    }
  }, []);
  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className='main-body'>
        <Sidebar />
         <Routes>
            <Route path="/" element={<Library />}></Route>
            <Route path="/feed" element={<Feed />}></Route>
            <Route path="/trending" element={<Trendings />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/player" element={<Player />}></Route> 
            <Route path="/library" element={<Library />}></Route> 
         </Routes>
      </div>
    </Router>  
  );
}
