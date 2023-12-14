import "./Nav2.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router";
function Nav2(){
    const navigate=useNavigate();
    return(
    <div className="shadow-md">
        <div className="Navbar">
            <img  className="logo-img" src="./assest/pw-skill-logo.jpg" alt="pw-skill-logo"/>
            <div className="parent">
                <input type="text" id="search"  placeholder="Search by product title" className="search-input" />
                <div className="child">
                    < AiOutlineSearch className="logo" />
                </div>
            </div>
            
            <button style={{ backgroundColor: 'rgb(210, 97, 75)' }} className="login-button" onClick={()=>navigate("login")}>Login/Register</button>
             {/* <MenuIcon className="menu"/>  */}
             {/* <MenuIcon className="hidden md:block " /> */}   
        </div>
        <div className="below-1">
            <select className="courses-select">
                <option value="" disabled selected>Courses</option>
                    <option value="Coding">Coding</option>
                    <option value="Development">Develpment</option>
            </select>
            <div><a href="https://www.onlinegdb.com/">PW lab</a></div>
            <div><a href="https://www.glassdoor.co.in/Reviews/index.htm?overall_rating_low=3.5&page=1&locId=2891681&locType=C">Job portal</a></div>
            <div>Experiance portal</div>
            <div>Become an affiliate</div>
            <div>Hall of fame</div>
        </div>
        {/* <hr className="box-shadow"></hr> */}
    </div>
    );
}
export default Nav2;