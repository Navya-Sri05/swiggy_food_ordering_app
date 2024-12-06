import {useRouteError} from "react-router-dom";

const Error=()=>{
    const error =useRouteError();
    console.log(error);
    return(
        <div>
            <h2>OOPS!!!!!</h2>
            <p>Something Went Wrong........</p>
            <p>{error.status}:{error.statusText}</p>
        </div>
    );
}
export default Error;