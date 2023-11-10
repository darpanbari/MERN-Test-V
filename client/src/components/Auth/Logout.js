import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId = "1064850911997-sngqkq9ih7v0n2gmimt6qlc7102m9285.apps.googleusercontent.com";

function Logout() {
  const navigate = useNavigate();
    const onSuccess = () => {
        console.log("logout success");
        alert("You have successfully logged out!");
        navigate("/");
    };

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="logout"
                onLogoutSuccess={onSuccess}      
                className="px-2"
            />
        </div>
    );
}

export default Logout;
