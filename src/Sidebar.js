import React from 'react';
import "./Sidebar";
import SidebarRow from './SidebarRow';
import  EmojiFlagIcon from '@material-ui/icons/EmojiFlags';
import  PeopleIcon from '@material-ui/icons/People';
import  ChatIcon from '@material-ui/icons/Chat';
import  StorefrontIcon from '@material-ui/icons/Storefront';
import  VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import  ExpandMoreOutlineIcon from '@material-ui/icons/ExpandMoreOutlined';
import  RedCross from '@material-ui/icons/LocalHospital';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://upload.wikimedia.org/
                        wikipedia/commons/thumb/0/05/Facebook_Logo_
                        %282019%29.png/1200px-Facebook_Logo_%2820
                        19%29.png" 
                        title="Mazin"/>
            <SidebarRow Icon={RedCross} title="Covid-19 updates"/>
            <SidebarRow Icon={EmojiFlagIcon} title="pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messanger "/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Video"/>
            <SidebarRow Icon={ExpandMoreOutlineIcon} title="Marketplace"/>

        </div>
    )
}

export default Sidebar
