import "./Nav2.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router";
function Nav2(){
    const navigate=useNavigate();
    return(
    <div className="shadow-md">
        <div className="Navbar">
            <img  className="w-28 ml-[105px] rounded-md mt-5 mr-10 h-10" src="./assest/logo-3.png" alt="pw-skill-logo"/>
            <div className="parent">
                <input type="text" id="search"  placeholder="Search by product title" className="search-input" />
                <div className="child">
                    < AiOutlineSearch className="logo" />
                </div>
            </div>
            
            <button style={{ backgroundColor: 'rgb(210, 97, 75)' }} className="ml-14 rounded-md p-2 mt-5" onClick={()=>navigate("/login")}>Login/Register</button>
             {/* <MenuIcon className="menu"/>  */}
             {/* <MenuIcon className="hidden md:block " /> */}   
        </div>
        <div className="below-1">
            <select className="courses-select">
                <option value="" disabled selected>Courses</option>
                    <option value="Coding">Coding</option>
                    <option value="Development">Develpment</option>
            </select>
            <div><a href="https://www.onlinegdb.com/">Compiler</a></div>
            <div><a href="https://www.glassdoor.co.in/Reviews/index.htm?overall_rating_low=3.5&page=1&locId=2891681&locType=C">Job portal</a></div>
            <div className="cursor-pointer"><a href="https://practice.geeksforgeeks.org/explore?page=1&sortBy=submissions">Coding Plateform</a></div>
            <div className="cursor-pointer"><a href="https://drive.google.com/drive/folders/1-2q7pN0SsWP3i68VNjeUjnfp001EN8pv">Exam Paper</a></div>
            <div className="cursor-pointer"onClick={()=>navigate("/Contact")}>Contact</div>
        </div>
        {/* <hr className="box-shadow"></hr> */}
    </div>
    );
}
export default Nav2;