
import Wrapper from "@/layout/Wrapper";
import About from "@/pages/about/About";
import Home from "@/pages/Home/Home";
// import Projects from "@/pages/Projects";
// import Workspace from "@/pages/Workspace";

import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    { 
        path:"/", 
        element: <Wrapper />,
        children: [
            {
                path:"",
                element:<Home />
            },
            {
                path:"/about",
                element:<About />
            },
            // {
            //     path:"/workspace",
            //     element: <Workspace />
            // },
            // {
            //     path:"/project/:id",
            //     element: <Projects />
            // }
        ]
      }
])

export default Router;
