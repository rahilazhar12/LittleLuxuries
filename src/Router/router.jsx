import Homebags from "../Screens/Bags/Homebags";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";





const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Homebags /> },
      ],
    },
  
   
  ]);


  export default router;