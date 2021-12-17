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
import {useStateValue} from "./StateProvider";


function Sidebar() {

   // eslint-disable-next-line   
  const [{user}, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} 
                        title={user.displayName}/>
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
