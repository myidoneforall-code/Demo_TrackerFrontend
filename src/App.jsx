// import {Suspense} from "react";
// import {BrowserRouter} from "react-router-dom";
// import Routes from "./Route";
// // import 'bootstrap/dist/css/bootstrap.min.css';  
// import 'simplebar-react/dist/simplebar.min.css';
// import '../public/assets/css/style.css';
// import "./scss/style.scss";
// import "./scss/responsive.scss";
// import Loader from "./Components/Loader";

// function App() {
//     return (
//         <Suspense fallback={<Loader/>}>
//             <BrowserRouter basename="/">
//                 <Routes/>
//             </BrowserRouter>
//         </Suspense>
//     )
// }

// export default App;



import { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Route";
import "simplebar-react/dist/simplebar.min.css";
import "../public/assets/css/style.css";
import "./scss/style.scss";
import "./scss/responsive.scss";
import Loader from "./Components/Loader";

function App() {

  // useEffect(() => {
  //   let isReload = false;

  //   // 🔹 Detect refresh (F5 / Ctrl+R)
  //   const handleKeyDown = (e) => {
  //     if (e.key === "F5" || (e.ctrlKey && e.key === "r")) {
  //       isReload = true;
  //     }
  //   };

  //   // 🔹 Detect tab / browser close
  //   const handleBeforeUnload = () => {
  //     if (isReload) return;

  //     const token = localStorage.getItem("token");
  //     if (!token) return;

  //     // 🔥 sendBeacon works even when tab closes
  //     const payload = JSON.stringify({
  //       reason: "TAB_CLOSED",
  //       token: token,
  //     });

  //     const blob = new Blob([payload], {
  //       type: "application/json",
  //     });

  //     navigator.sendBeacon(
  //       "https://your-api-domain.com/api/auth/logout",
  //       blob
  //     );

  //     // 🔹 Clear client session
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("user");
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename="/">
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
