import React from "react";
import '../stylesheets/HeaderIndex.css'
import  LoginButton from './LoginButton'
import  LogoutButton from './LogoutButton'
import { useAuth0 } from "@auth0/auth0-react";

function HeaderIndex() {
    const { user,isAuthenticated} = useAuth0();
    if (isAuthenticated) {
        const ImageLogo = user.picture
        return(
            <div className='HeaderIndex'>
                <img className='HeaderIndexLogo' src={require('../imagenes/logo.png')}  alt={'Logo'} />
                <img className='HeaderIndexUserImage' src={ImageLogo} alt={user.name} />
                <LogoutButton />
            </div>
        );
      } 
      else {
        return(
            <div className='HeaderIndex'>
                <img className='HeaderIndexLogo' src={require('../imagenes/logo.png')}  alt={'Logo'} />
                <LoginButton />
            </div>
        );
      }
    
}


export default HeaderIndex;