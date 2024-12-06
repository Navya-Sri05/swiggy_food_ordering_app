import  React from "react";
// const User=()=>{
//     return(
//         <div>
//             <h1> Name:Sajan</h1>
//             <h1>Location:Vizag</h1>
//         </div>

//     );
// }


class UserClass extends React.Component{
    
    constructor(props){
        super(props);

        //creating state variable

        this.state={
            // count:0,
            // count2:35,
            userInfo:{
                name:"Dummy",
                location:"lucknow",
            }
        };
        //console.log("Child constructor");
    }

    async componentDidMount(){
      //  console.log("child component mount");
      const data=await fetch("https://api.github.com/users/akshaymarch7");
      const json= await data.json();
      this.setState({
        userInfo:json,
     } );


      console.log(json);
    }
   


    render(){
       // console.log("Child render");

      //  const {count,count2}=this.state;
        const {name,followers,company}=this.state.userInfo;
        return(
            <div className="userClass">
             <h3 className="font-semibold"> Name of the Husband :Sajan</h3>
             <h3>{this.props.location}</h3>
             <h3 className="font-bold">Wife Name:{this.props.name}</h3>
             <h3>Location:Ravulapalem</h3>
             {/* <h3>{this.state.count}</h3> */}
             {/* <h3>Count:{count}</h3>
             <h3>Count2:{count2}</h3>
             <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                    count2:this.state.count2+2,
                })
            }}>Count Increased</button> */}

            <h2>{name}</h2>
            <h2>Company:{company}</h2>
            <h2>Followers:{followers}</h2>
         </div>
            

        );
    }

}
export default UserClass;