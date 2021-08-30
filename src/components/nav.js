import "./..//styles/navbar.css"
import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <>
           <div className="navbar" >
               <div className="logodiv" id="navbar-1">
               <img src="https://images-platform.99static.com//o5_Q8pUagynJuidDta7JRMJ7_K8=/311x281:1652x1622/fit-in/590x590/99designs-contests-attachments/74/74026/attachment_74026482" alt="logo" className="logo"></img>
               </div>
               <div className="navbar-content">
                   <Link to="/" className="content one">Categories</Link>
                   <Link  to="/" className="content one">Offers</Link>
                   <Link  to="/" className="content one">Latest Articles</Link>
                   <Link  to="/" className="content one">Connect</Link>
                   <Link  to="/" className="content two">Login</Link>
                   <Link  to="/" className="content two">Sign Up</Link>
               </div>
           </div>
        </>
    )
}
export default Navbar;