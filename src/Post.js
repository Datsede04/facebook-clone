import React from 'react'
import {Avatar} from '@material-ui/core'
import './Post.css'
import { ThumbUp } from '@material-ui/icons'
import { ChatBubbleOutline } from '@material-ui/icons'
import { AccountCircle } from '@material-ui/icons'
import NearMeIcon  from '@material-ui/icons/NearMe'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar  src={profilePic} className="post__avatar"/>
  
                <div className='post_topInfo'>
                    <h3>{username}</h3>
                    <p>Timestamp ...</p>
                </div>
            </div>
            
            <div className='post__bottom'>
               <p>{message}</p>
               
            </div>

            <div className='post__image'>
                <img src={image} alt=''/>
            </div>

            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUp />
                    <p>Like</p>
                </div>
                
                <div className='post__option'>
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className='post__option'>
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>

            </div>
        </div>
    )
}

export default Post
