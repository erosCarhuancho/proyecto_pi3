import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated} = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <h1>Bienvenido</h1>
        <h2>{user.name}</h2><br/><br/>
        <h2>Sistema de reservas</h2>
        <img className='HeaderIndexLogo' src={require('../imagenes/CodingInProgress.png')}  alt={'CodingInProgress'} />
      </div>
    )
  );
};

export default Profile;