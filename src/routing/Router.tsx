import Wrapper from "@/layout/Wrapper";
import About from "@/pages/about/About";
import Home from "@/pages/Home/Home";
import Contactus from "@/pages/contactus/Contactus";
import Workspace from "@/pages/workspace/Workspace";
// import Projects from "@/pages/Projects";

import { createBrowserRouter } from "react-router-dom";
import Protectedroutes from "@/layout/Protectedroutes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      // {
      //     path:"/project/:id",
      //     element: <Projects />
      // }
    ],
  },
  {
    path: "",
    element: <Protectedroutes />,
    children: [
      {
        path: "/workspace",
        element: <Workspace />,
      },
    ],
  },
]);

export default Router;
