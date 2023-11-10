import { gapi } from "gapi-script";
import { useEffect } from "react";

const clientId =
  "1064850911997-sngqkq9ih7v0n2gmimt6qlc7102m9285.apps.googleusercontent.com";

function GoogleAuth() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return null;
}

export default GoogleAuth;
