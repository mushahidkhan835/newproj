import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import HomeIcon from '@mui/icons-material/Home';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} Title="Home"/>
      <SidebarRow Icon={WhatshotIcon} Title="Trending"/>
      {/* <SidebarRow icon={} title="Library"/>
      <SidebarRow icon={} title="History" /> */}


      <SidebarRow Icon={VideoLibrarySharpIcon} Title="Library"/>
      <SidebarRow Icon={HistorySharpIcon} Title="History"/>
      <SidebarRow Icon={ThumbUpSharpIcon} Title="Liked Content"/>
      <hr/ >
      <SidebarRow Icon={LoginSharpIcon} Title="Sign In"/>

    </div>
  )
}

export default Sidebar 
