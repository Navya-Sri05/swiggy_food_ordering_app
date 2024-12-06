import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";
import About from "./src/Component/About";
import Contact from "./src/Component/Contact";
import Error from "./src/Component/Error";
//import Grocery from "./src/Component/Grocery";
import RestaurantMenu from "./src/Component/RestaurantMenu";
import { createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom";
import {useState,useEffect} from "react";
import UserContext from "./src/Utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./src/Utils/appStore";
import Cart from "./src/Component/Cart";





const Grocery =lazy(()=> import("./src/Component/Grocery"));


 const AppLayout=()=>{

    const [userName,setUserName]=useState();

    useEffect(()=>{
        const data={
            name:"SajanNavi"
        }
        // setUserInfo(userInfo);
        setUserName(data.name);

    },[])

    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
    <div className="app">
        <Header />
        <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
    );

 };
 const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            { 
                path:"/cart",
                element:<Cart />

            },
            {
                path:"/grocery",
                element:(<Suspense
                 fallback={<h1>Loading.....</h1>}>
                    <Grocery /></Suspense>),
               // element:<Grocery />,

            },
            {
                path:"/city/bangalore/:resId",
                element:<RestaurantMenu />
            }


        ],
        errorElement:<Error />
    },
    
 ])
  
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  
  root.render(<RouterProvider router={appRouter} />);