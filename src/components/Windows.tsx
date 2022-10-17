import './Windows.css';
import React from "react";
import Desktop from "./Desktop/Desktop";
import LockScreen from "./LockScreen/LockScreen";
import Taskbar from "./Taskbar/Taskbar";

var Windows = () => {

    const [token, setToken] = React.useState<string>('ciao');

    function openWindows(password :string){
      if(password && password === 'ciao'){
        setToken('ciao');
      }
    }
  
    if(token !== 'ciao'){
      return (<LockScreen openWindows={openWindows} enabled={true} />)
    }
  
    return ( 
      <div className='windows-11-container'>
          <Desktop></Desktop>
          <Taskbar></Taskbar>
      </div>
      );
}

export default Windows;