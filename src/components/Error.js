import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError()
    return (
        <div className="error-routing">
            <h2> {err.status}:{err.statusText}</h2>
            {console.log(err)}
        </div>
    )
}

export default Error;