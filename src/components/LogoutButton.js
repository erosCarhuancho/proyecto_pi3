import React from "react";
import '../stylesheets/LogoutButton.css'
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div className='ContentLogoutButton'>
      <button className="button-86" onClick={() => logout()}>Cerrar Sesión</button>
    </div>
  );
};

export default LogoutButton;