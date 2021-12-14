import React, {useState} from "react";
import { Avatar } from "@material-ui/core";
import "./MessageSender.css";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl,setImageUrl] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();

        setInput('')
        setImageUrl('')
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
            <Avatar />
            
            <form>
                  <input value={input} 
                  onChange={(e)=>setInput(e.target.value)}
                  className="messageSender__input" 
                  placeholder={'What\'s on your mind ?'} />
                 
                  <input value={imageUrl} 
                  onChange={(e)=>setImageUrl(e.target.value)}
                  placeholder="image URL (Optional)"/>
             
                <button onClick={handleSubmit} type='submit'>
                 Hidden submit
                 </button> 
             </form>
            
            </div>

            <div className="messageSender__bottom">
                   <div className='messageSender__options'>
                        <Videocam style={{color:"red"}} />
                        <h3>Live Video</h3>
                    </div>

                   <div className='messageSender__options'>
                        <PhotoLibrary style={{color:"green"}} />
                        <h3>Photo/Video</h3>
                    </div>
                   
                   <div className='messageSender__options'>
                        <InsertEmoticon style={{color:"orange"}} />
                        <h3>Feeling/Activity</h3>
                    </div>
            </div>
        </div>
    )
}

export default MessageSender;
