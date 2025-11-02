
import Wrapper from "@/layout/Wrapper";
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