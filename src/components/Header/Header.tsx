import React from 'react'
import "./Header.scss"
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Header = () => {
  return (
    <div className="Header">
        <div className="headerRight">
            <h3>#logo </h3>
            <div className="headerSearch">
                <SearchIcon />
                <input type="text" placeholder='気になる選手を検索' />
            </div>
        </div>
    </div>
  )
}

export default Header