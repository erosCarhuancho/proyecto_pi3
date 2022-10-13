import React from "react";
import '../stylesheets/LoginButton.css'
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='ContentLoginButton'>
      <button className="button-86" onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginButton;