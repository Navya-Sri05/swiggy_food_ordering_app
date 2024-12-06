
import { fireEvent,render,screen } from "@testing-library/react";
import {Provider} from "react-redux";
import appStore from "../../Utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


test("should load header component with a login button",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        
    </Provider>
    </BrowserRouter>
    );

     const loginButton=screen.getByRole("button",{name:"Login"});
    // const loginButton=screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();

}); 

test("should load header component with a cart item ",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        
    </Provider>
    </BrowserRouter>
    );

    //  const cartInput=screen.getByText("Cart -(0 items)");
     const cartInput=screen.getByText(/Cart/);
   

    expect(cartInput).toBeInTheDocument();

}); 
test("should change login to logout button on click in header component ",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        
    </Provider>
    </BrowserRouter>
    );

     const loginButton=screen.getByRole("button",{name:"Login"});

     fireEvent.click(loginButton);

     const logoutButton = screen.getByRole("button",{name:"Logout"});
    

    expect(logoutButton).toBeInTheDocument();

}); 
