import React from "react";
import LockScreen from "./LockScreen/LockScreen";

function Windows() {

    const [token, setToken] = React.useState<string>();
  
    if(token !== 'ciao'){
      return (<LockScreen enabled={true} />)
    }
  
    return ( <div>Windows</div> );
}

export default Windows;