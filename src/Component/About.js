import UserClass from"./UserClass";
// import React from "react";
import {Component} from "react";
import UserContext from "../Utils/UserContext";

// const About=()=>{
//     return(
//         <div>
//             <h2>About Us</h2>
//             <h2>This is Namaste React Web Series</h2>
//             <UserClass name={"Navi"} location={"Yalamanchili"}/>
//         </div>
//     );
// }
class About extends Component{
constructor(){
    super();
  //  console.log("parent constructor");
}

componentDidMount(){
  //  console.log("parent component Did Mount");
}


    render(){

      // console.log("parent Render");



        return(
            <div>
               <h2>About Us</h2>
               <div>
                <UserContext.Consumer>
                  {({loggedInUser})=><h1 className="font-extrabold">{loggedInUser}</h1>}
                </UserContext.Consumer>
               </div>
               <h2>This is Namaste React Web Series</h2>
                <UserClass name={"Navi"} location={"Yalamanchili"}/>
            </div>

        );
    }

}

export default About;