import HomeIcon from '@mui/icons-material/Home';
import { Dialog } from '@mui/material';
 import { useState } from 'react';
 //import Navbar from "../components/Navbar";
 import Nav2 from './Nav2';

 import Badge from '@mui/material/Badge';

 import Footer  from '../components/Footer';
// //
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import CloseIcon from '@mui/icons-material/Close';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Slider from 'react-slick';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Navigate, useNavigate } from 'react-router';


const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4.2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  // nextArrow:<ArrowRightIcon style={{marginTop:"10px",display:"flex",justifyContent:"center", alignItems:"center"}}/>,
  // prevArrow:<ArrowLeftIcon/>
};

//scroll
// import Nav2 from "./Nav2";
// import React, { useState, useEffect } from 'react';
// import { green } from '@mui/material/colors';

//slider:-
// import React, { Component } from "react";

  
const company=[
  {
    id:1,
    link:"./assest/company-1.png"
  },
  {
    id:1,
    link:"./assest/company-2.png"
  },
  {
    id:1,
    link:"./assest/company-3.png"
  },
  {
    id:1,
    link:"./assest/company-4.png"
  },
  {
    id:1,
    link:"./assest/company-5.png"
  },
  {
    id:1,
    link:"./assest/company-6.png"
  },
  {
    id:1,
    link:"./assest/company-7.png"
  },
  {
    id:1,
    link:"./assest/company-8.png"
  }
  
];
   

function Explore(){
  const [open,setOpen] = useState(false)
  const handleClickOpen =()=>{
      setOpen(true)
  }
  const handleClose =()=>{
    setOpen(false)
  }

  // const [showNavbar, setShowNavbar] = useState(false);

  //slider:-
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear"
  // };

  // useEffect(() => {
  //   // Event listener to check if the user has scrolled past a specific height
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setShowNavbar(true);
  //     } else {
  //       setShowNavbar(false);
  //     }
  //   };

  //   // Attach the event listener when the component mounts
  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  

  
  const navigate=useNavigate();
  return(
    <div className="">
      <Nav2></Nav2>
      <div className='justify-between m-28 flex'>
        <div>
            <div className='flex gap-1'> 
                <HomeIcon color='disabled'/>
                 <p className='font-thin'> home {'>'}</p>
                <p className='font-bold'>Full Stack Web Dev</p>
            </div>
            <div className='text-4xl font-bold mt-6'>Decode Full Stack Web Dev 1.0</div>
            <div className='w-2/3 mt-6'>
              Full Stack Web Development is creating complete web applications, handling both the 
              front-end and back-end tasks, including databases and servers. It requires expertise in 
              various programming languages, frameworks, and tools to build dynamic and user-friendly 
              websites and applications.
            </div>
            <div className='flex mt-10 gap-2'>
              <p className='font-bold text-2xl '>Rs. 3500.00</p>
              <del className='m-1 text-lg'>7000.00</del>
              <p className='rounded-full w-7 h-7 bg-green-600 pl-2 mt-1'>%</p>
              <p className="text-green-600 mt-1 text-lg">
                    50% Discount
              </p>
            </div>
            <div className='flex h-12 gap-3 mt-10 '>
              <dutton style={{backgroundColor: 'rgb(210, 97, 75)'}} className='rounded-md  w-44 pl-12 pt-3' onClick={()=>navigate("/login")}>Enroll now</dutton>
              <button style={{backgroundColor: 'rgb(255, 219, 211)'}} className='rounded-md  w-44' onClick={handleClickOpen}> Share</button>
            </div>
            <div className='mt-2 font-thin'>* EMI Options Available</div>
        </div>
         <img alt='course' src='/assest/webdev-1.jpg' className='rounded-3xl w-[500px] h-3/4 mt-20'></img>
      </div>
      <div className='bg-gradient-to-b from-white to-[#FFF7F5] '>
       <div style={{boxShadow:"2px 1px 10px 1px rgba(192,192,192,1)"}} className='flex justify-around bg-white m-28 rounded-lg p-8'>
          <div>
           <p className='text-2xl font-bold'>25 Nov 2023</p>
           <p className='ml-6 mt-1'>Starts On</p>
          </div>
          <div>
           <p className='text-2xl font-bold'>4 Months</p>
           <p className='ml-6 mt-1'>Duration</p>
          </div>
          <div>
           <p className='text-2xl font-bold'>Anyone</p>
           <p  className='ml-2 mt-1'>Eligibility</p>
          </div>
          <div>
           <p className='text-2xl font-bold'>Hinglish</p>
           <p className='ml-3 mt-1'>Language</p>
          </div>
      </div>
      <div>
          <div className='flex justify-around'>
           <img alt='png' src="./assest/statistics4-icon.png"></img>
           <img alt='png' src="./assest/statistics1-icon.png" ></img>
           <img alt='png' src="./assest/statistics3-icon.png" ></img>
           <img alt='png' src="./assest/statistics2-icon.png" ></img>   
          </div>
          <div className='flex justify-between text-2xl font-bold mt-4'>
            <div className='ml-20'>Roles After Completion</div>
            <div className='mr-2'>Learning Mode</div>
            <div className='mr-2'>Skills You Will Gain</div>
            <div className='mr-20'>Minimum Eligibility</div>
            
          </div>
          <div className='flex justify-between mt-2 font-thin'>
            <div className='ml-20'>Full Stack Developer, Frontend Engineer</div>
            <div className=''>Hybrid</div>
            <div className=''>HTML, CSS, Tailwind CSS, JavaScript, React</div>
            <div className='mr-44'>Anyone</div>  
          </div>
          <div className='font-thin pb-10'>
            <div className='flex justify-around'>
              <div className='ml-[-96px] mr-16'> Backend Engineer</div>
              <div className='mr-56'>MongoDB, NodeJS, ExpressJS</div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-16 flex justify-center text-3xl font-bold'>
            Course Offerings
      </div>
      <table className='border-collapse w-3/4 mt-16 m-44 '>
          <tr>
           <th className='border-2 border-black border-t-0 border-l-0 border-r-0 p-2 text-center pl-28 pb-10 pt-10'><img alt="offer" src='./assest/offer-1.png'/></th>
           <th className='border-2 border-black border-t-0 border-l-1 border-r-0 p-2 text-center pl-28 pb-10 pt-10'><img alt="offer"  src='./assest/offer-2.png'/></th>
           <th className='border-2 border-black border-t-0 border-l-1 border-r-0 p-2 text-center pl-28 pb-10 pt-10'><img alt="offer"  src='./assest/offer-3.png'/></th>
           <th className='border-2 border-black border-t-0 border-l-1 border-r-0 p-2 text-center pl-28 pb-10 pt-10'><img alt=".offer" src='./assest/offer-4.png'/></th>
          </tr>
          <tr>
            <td className='border-2 border-black border-t-0 border-l-0  p-2 text-center pl-28 pb-10 pt-10'><img alt="offer" src='./assest/offer-5.png'/></td>
            <td className='border-2 border-black border-t-0 border-l-1  p-2 text-center pl-28 pb-10 pt-10'><img alt="offer" src='./assest/offer-6.png'/></td>
            <td className='border-2 border-black border-t-0 border-l-1  p-2 text-center pl-28 pb-10 pt-10'><img alt="offer" src='./assest/offer-7.png'/></td>
            <td className='border-2 border-black border-t-0 border-l-1 border-r-0 p-2 text-center pl-28 pb-10 pt-10'><img alt="offer" src='./assest/offer-8.png'/></td>
          </tr>
          <tr>
            <td className='border-2 border-black border-t-0 border-l-0 border-r-0 border-b-0  p-2 text-center pl-28 pb-10 pt-10'><img alt="offer" src='./assest/offer-9.png'/></td>
            <td className='border-2 border-black border-t-0 border-l-1 border-r-0 border-b-0 p-2 text-center pl-28 pb-10 pt-10'><img alt="offer" src='./assest/offer-10.png'/></td>
            <td className='border-2 border-black border-t-0 border-l-1 border-r-0 border-b-0 p-2 text-center pl-28 pb-10 pt-10'><img alt="offer" src='./assest/offer-11.png'/></td>
            <td className='border-2 border-black border-t-0 border-l-1 border-r-0 border-b-0 p-2 text-center pl-28 pb-10 pt-10'><img alt="offer" src='./assest/offer-12.png'/></td>
          </tr>
      </table>
      <Dialog open={open} onClose={handleClose}>
       <div className=' rounded-3xl'>
         <div className='flex p-8 font-bold'>
          <div className='text-2xl '>share link</div>
          <CloseIcon className='mt-2 ml-44'  onClick={handleClose} />
         </div>
         
         <div className='flex justify-around w-96 pt-5'>
              <div>
               <div className='w-12 h-12 rounded-full bg-green-200 pl-3 pt-2'><WhatsAppIcon className='text-green-600' /></div> 
               <div className=''> WhatsApp</div>
              </div>
             <div>
               <div className='w-12 h-12 rounded-full bg-blue-200 pl-3 pt-2'><FacebookIcon className='text-blue-400'/></div>
               <div>Facebook</div>
             </div>
             <div>
               <div className='w-12 h-12 rounded-full bg-blue-300 pl-3 pt-2'><TwitterIcon className='text-blue-500'/></div>
               <div>Twitter</div>
             </div>
         </div>
         <div className='flex justify-around w-96 pt-20'>
          <div>
            <div className='w-12 h-12 rounded-full bg-blue-300 pl-3 pt-2'><TelegramIcon className='text-blue-500'/></div>
            <div className=''>Telegram</div>
          </div>
          <div>
            <div className='w-12 h-12 rounded-full bg-red-200 pl-3 pt-2'><RedditIcon className='text-red-500'/></div>
            <div>Reddit</div>
          </div>
          <div>
            <div className='w-12 h-12 rounded-full bg-blue-200 pl-3 pt-2'><LinkedInIcon className='text-blue-500'/></div>
            <div>LinkedIn</div>
          </div>  
         </div>
         <div  className=''>
           <div className='text-lg font-thin ml-8 mt-8'>
             Page Link
           </div>
           <div className='flex ml-8 mt-4 mb-4'>
              <div className='border-2 rounded-l-md pt-[-1] font-thin'>https://ragsedu.com/course/decode...</div>
              <ContentCopyIcon  className='bg-pink-500  p-1  rounded-r'/>
           </div>
         </div>
       </div>
      </Dialog>
      <div className='flex justify-center text-3xl font-bold pb-16'>Master these Technologies</div>
      <div className='mx-[100px] pb-10'>
        <Slider {...settings}  >
          {company.map((info)=>(
            <div className=' '>
              <img className='border-2 rounded-lg w-44 h-20 p-5 object-cover shadow-md' alt="company"src={info.link}></img>  
            </div>
          ))}
        </Slider>
      </div>
      <div className='flex justify-center text-3xl font-bold pb-16'>Get Mentored by Experts From</div> 
      <div className='mx-[100px] pb-10'>
        <Slider {...settings}  >
          {company.map((info)=>(
        <div className=' '>
          <img className='border-2 rounded-lg w-44 h-20 p-5 object-cover shadow-md' alt="company"src={info.link}></img>  
        </div>
          ))}
        </Slider>
      </div> 
            {/* z- 1*/}
      {/* <Badge color="secondary" badgeContent={10} className='' > */}
      <div className='rounded-full bg-cyan-600 w-16 h-16 bottom-0 left-full   sticky'>
          <img alt="message" src="./assest/message-3.jpg" className='  rounded-full p-4'></img>
      </div>
      {/* </Badge> */}
      <Footer className='relative'> </Footer>
      
         
    </div>
  )
}
export default Explore;