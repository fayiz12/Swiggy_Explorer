import React from "react"
import ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import { RouterProvider } from "react-router-dom"
import Error from "./components/Error"
import { Outlet } from "react-router-dom"
import RestraurantMenu from "./components/RestraurantMenu"





const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}
const routing = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>

            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restraurants/:restId",
                element:<RestraurantMenu/>
            }
            

        ]
    }

]);

const root=ReactDOM.createRoot(document.getElementById('root'))

// this is how the functional component is rendered
root.render(<RouterProvider router={routing}/>)