import React, {useState, useEffect} from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import { db } from "./firebase";

function Feed() {
   
    const [post, setPost]= useState([]);

    useEffect(() => {
        db.collection("post")
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot => setPost(snapshot.docs.map((doc)=> ({id:doc.id,data:doc.data()}))))
    }, [])
    
    console.log(post);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {post.map((post)=>(

                <Post
                    keyid={post.data.id}
                    message={post.data.message|| post.data.messasge}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image} 
                    />
            ))}
       
        </div>
    )
}

export default Feed
