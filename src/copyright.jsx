import { Link } from "react-router-dom";
import "./copyright.css"
function Cr(){
    return(
        <div className="cs"> 
            <span>@Designed by <Link to="https://chiragsharma.co.in/">Chirag Sharma</Link></span>
        </div>
    )
}
export default Cr;