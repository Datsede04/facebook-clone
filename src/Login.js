import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth, provider} from "./firebase";

function Login() {
 const signIn =() => {
    
 };
    return (
        <div className='login'>
            <div className='login__logo'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png'
                     alt='logo of facebook'>
                </img>

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eE3C4eIj7_IEYrHDvG4dpSdTQXIXHQbUI9utj_gHhfC-mEQcPKdKKcMNtUuLbXSUXJc&usqp=CAU"
                  alt='logo of facebook text'
                  >
                </img>

            </div>
           
            <Button type="submit" onClick = {signIn}
            >Sign In

            </Button>
        </div>
    )
}

export default Login
