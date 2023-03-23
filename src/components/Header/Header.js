import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from  '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';


function Header () {

    return (
        <div className='header'>
            <div className='header_left'>
                <MenuIcon />
                <Link to='/'>
                    <img
                        className='header_logo'
                        src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                        alt=''
                        />
                </Link>
            </div>

            <div className='header_center'>
                <input type='text'/>
                <SearchIcon className='header_searchbar'/>
            </div>

            <div className='header_right'>
                <VideoCallIcon className='header_icon'/>
                <AppsIcon className='header_icon'/>
                <NotificationsIcon className='header_icon'/>
                <Avatar
                    alt='Dolamu Oludare'
                    stc=''
                />
            </div>
        </div>






    )
}


export default Header;