// import { onAuthStateChanged } from "firebase/auth";
// import { useEffect, useState } from "react";
// import { auth } from "../services";

// export const useAppAuth = () => {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const unsubscribeFromAuthStatusChanged = onAuthStateChanged(
//       auth,
//       (user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/firebase.User
//           setUser(user);
//         } else {
//           // User is signed out
//           setUser(undefined);
//         }
//       }
//     );

//     return unsubscribeFromAuthStatusChanged;
//   }, []);

//   return {
//     user,
//   };
// };
