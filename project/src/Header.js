import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';import SearchIcon from '@mui/icons-material/Search';
import PermCameraMicIcon from '@mui/icons-material/PermCameraMic';import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar } from '@mui/material';
import MenuSharp from '@mui/icons-material/MenuSharp';

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuSharp />
        <img className="header_logo" src="" alt=""/>
      </div>
      <div className="header_input">
        <input type="text" placeholder="Search"/>
        <SearchIcon className="header_inputButton" />
      </div>
      <div className="header_icons">
        <PermCameraMicIcon className="header_icon"/>
        <NotificationsIcon className="header_icon"/>
        <Avatar alt="Profile Image" src ="" className="header_icon"/>     
       </div>
      
    </div>
  )
}

export default Header 
