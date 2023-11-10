// import React from 'react';
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
// import jwtDecode from "jwt-decode";

// const Login1 = () => {
//   return (
//     <div>
//       <GoogleOAuthProvider clientId="776570937916-69b5nq5b5gd9ouhes76fpf497q117s9c.apps.googleusercontent.com">
//         <GoogleLogin
//           onSuccess={(credentialResponse) => {
//             if (credentialResponse.response) {
//             //   const details = jwtDecode(credentialResponse.response);
//             //   console.log(details);
//               console.log(credentialResponse);
//             } else {
//               console.error("Invalid or missing token");
//             }
//           }}
//           onError={(error) => {
//             console.log("Login Failed", error);
//           }}
//         />
//       </GoogleOAuthProvider>
//     </div>
//   );
// };

// export default Login1;
