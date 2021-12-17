import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgits from './Widgits';
import './App.css';
import Login from "./Login";
import {useStateValue} from "./StateProvider";

function App() {
   // eslint-disable-next-line 
  const [{user}, dispatch] = useStateValue();
  
  return (
    // BEM naming convention
  
    <div className="app">
     {
       !user ?(<Login />)
       :(
        
      <><Header />
      <div className="app_body">

              <Sidebar />
              <Feed />
              <Widgits />
            </div></>       
  
        )
       }
       </div>
  )
};

export default App;
