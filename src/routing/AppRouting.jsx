import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Notfound from "../Pages/Notfound";
import Products from "../Pages/Products";
import MainLayout from "../layout/MainLayout";
import Contact from "../Pages/Contact";
import ProductView from "../Pages/ProductView";
import Register from "../Pages/auth/Register";




export const router=createBrowserRouter([
   
{
    element:<MainLayout />,
children:[
      {index:true,
    element:<Home />,

  },
  {path:"/contact",
    element:<Contact />,

  },
  {path:"/about",
    element:<About />,

  },
  {path:"/products",
    element:<Products />,

  },
  {path:"/products/:id",
    element:<ProductView />,

  },
  {path:"/register",
    element:<Register/>,

  },
  {path:"/*",
    element:<Notfound />,

  },

]
},
])
