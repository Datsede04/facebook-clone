import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlined from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlined from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationActivateIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from "./StateProvider";


function Header() {
 // eslint-disable-next-line 
  const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"></img>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>
            <div className="header__center">
                <div className="header__option header_option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize="large"/>
                </div>

            
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user._delegate.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationActivateIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
