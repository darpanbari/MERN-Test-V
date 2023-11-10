import React from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId = "1064850911997-sngqkq9ih7v0n2gmimt6qlc7102m9285.apps.googleusercontent.com";

function LoginWithOauth() {
    const navigate = useNavigate();

    const onSuccess = (res) => {
        console.log("login success", res.profileObj);
        alert("Login successful! Redirecting to /dashboard...");
        navigate("/all-customers");
    };

    const onFailure = (res) => {
        console.log("login failed", res);
    };

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login With Gmail"
                onSuccess={onSuccess}
                onFailure={onFailure}
                isSignedIn={true}
                className="w-100 d-flex justify-content-center"
            />
        </div>
    );
}

export default LoginWithOauth;
