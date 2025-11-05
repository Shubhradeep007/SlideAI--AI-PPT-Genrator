import Wrapper from "@/layout/Wrapper";
import About from "@/pages/about/About";
import Home from "@/pages/Home/Home";
import Contactus from "@/pages/contactus/Contactus";
import Workspace from "@/pages/workspace/Workspace";

import { createBrowserRouter } from "react-router-dom";
import Protectedroutes from "@/layout/Protectedroutes";
import Outline from "@/pages/workspace/project/outline/Outline";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contactus /> },
    ],
  },
  {
    path: "",
    element: <Protectedroutes />,
    children: [
      { path: "/workspace", element: <Workspace /> },
      { path: "/workspace/project/:id/outline", element: <Outline /> },
    ],
  },
]);

export default Router;
