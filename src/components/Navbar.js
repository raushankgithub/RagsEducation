import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import './Navbar.css';
 import Mid from "./mid";
// import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router";


function Navbar(){
    const navigate=useNavigate();
    return(
    <div className="navbar-parent">
        <div className="Navbar">
            <img  className="w-28 ml-20 rounded-md mt-5 mr-10 h-10" src="./assest/logo-3.png" alt="rags-skill-logo"/>
            <div className="parent">
                <input type="text" id="search"  placeholder="Search by product title" className="search-input" />
                <div className="child">
                    < AiOutlineSearch className="logo" />
                </div>
            </div>
            
            <button style={{ backgroundColor: 'rgb(210, 97, 75)' }} className="login-button" onClick={()=>navigate("/Register")}>Login/Register</button>
             {/* <MenuIcon className="menu"/>  */}
             {/* <MenuIcon className="hidden md:block " /> */}


            
        </div>
        {/* below */}
        <div className="flex mt-10 mb-7 ml-[80px] ">
        {/*c--- courses-select */}
            <select className="bg-gray-300 h-10 rounded-md" onClick={()=>navigate("/Courses")}>
                <option value="" disabled selected >Resources</option>
                    
                    <option value="Coding">
                        Dsa
                        {/* <a href="https://practice.geeksforgeeks.org/explore?page=1&sortBy=submissions">Coding</a> */}
                    </option>
        
                <option value="Development">Develpment</option>
                <option value="Development">Academics</option>
                <option value="Development">Gate</option>
                <option value="Development">Placement</option>
            </select>
            <div className="flex gap-48 ml-12 mt-1">
            <a href="https://www.onlinegdb.com/">Compiler</a>
            <a href="https://www.glassdoor.co.in/Reviews/index.htm?overall_rating_low=3.5&page=1&locId=2891681&locType=C">Job portal</a>
            <a href="https://practice.geeksforgeeks.org/explore?page=1&sortBy=submissions" className="cursor-pointer">Coding Plateform</a>
            <a href="https://drive.google.com/drive/folders/1-2q7pN0SsWP3i68VNjeUjnfp001EN8pv" className="cursor-pointer">Exam Paper</a>
            <div className="cursor-pointer" onClick={()=>navigate("/Contact")}>Contact</div>
            </div>
        </div>
         
          {/* <div className="line"></div>  */}
        <Mid/>
    </div>
    );
}
export default Navbar;
