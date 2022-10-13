import React from "react";
import '../stylesheets/Main.css'
import Profile from './Profile'
import LadingPage from './LandingPage';
import { useAuth0 } from "@auth0/auth0-react";


function Main(params) {
    const { isAuthenticated } = useAuth0();
    return(
        <div>
            {isAuthenticated ?  <Profile />: <LadingPage />}
        </div>
    );
}


export default Main;