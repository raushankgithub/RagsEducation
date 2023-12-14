import { useNavigate } from 'react-router';
import Nav2 from './Nav2';
// import VideoCardList from '../components/Vcard/VideoCardList';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ReplyIcon from '@mui/icons-material/Reply';
import SchoolIcon from '@mui/icons-material/School';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import GirlSharpIcon from '@mui/icons-material/GirlSharp';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog } from "@mui/material";
import React, { useState } from "react";
function Courses(){
    const navigate=useNavigate();
    const videos=[
        {
          courseno:1,
          image:"./assest/dsa-1.jpg",
          videolink:"https://www.youtube.com/embed/FuHfoe7U4Fg",
          language:"Hinglish",
          heading:"Dsa Placement Series",
          educatorP1:"Love Babbar ",
          educatorP2:"and 3 more",
          date:"140 lecture",
          detailsP1:"Complete Placement Prepration",
          // detailsP2:"& More",
          working:"college student & working professional",
          price:"Rs. 20000.00",
          offprcie:"40000.00",
          discount:"50% Discount",
          buttoncontent1:"Explore",
          buttoncontent2:"Enroll Now",
          videolink1:"https://www.youtube.com/embed/igGtZWTm0O4",
          src:"https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"
        },
        {
          courseno:2,
          image:"./assest/webdev-1.jpg",
          videolink1:"https://www.youtube.com/embed/lI7IIOWM0Mo",
          language:"english",
          heading:"Web development",
          educatorP1:"chai aur code ",
          educatorP2:"and 3 more",
          date:"Library -REACT ",
          detailsP1:"carrer guidance | job assurance",
          detailsP2:"& More",
          working:"college student & working professional",
          price:"Rs. 20000.00",
          offprcie:"40000.00",
          discount:"50 %",
          buttoncontent1:"Explore",
          buttoncontent2:"Enroll Now",
          videolink:"https://www.youtube.com/embed/igGtZWTm0O4",
          src:"https://www.youtube.com/results?search_query=chai+aur+code"
        },
        {
          courseno:3,
          image:"./assest/java-1.jpg",
          videolink1:"https://www.youtube.com/embed/ZRS485LxX0s",
          language:"english",
          heading:"Java placement course",
          educatorP1:"Apna college ",
          educatorP2:"and 3 more",
          date:"39 Lecture",
          detailsP1:"carrer guidance | job assurance",
          detailsP2:"& More",
          working:"college student & working professional",
          price:"Rs. 20000.00",
          offprcie:"40000.00",
          discount:"50 %",
          buttoncontent1:"Explore",
          buttoncontent2:"Enroll Now",
          videolink:"https://www.youtube.com/embed/igGtZWTm0O4",
          src:"https://www.youtube.com/watch?v=yRpLlJmRo2w&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop"
        },
        {
          courseno:4,
          image:"./assest/dbms-1.jpg",
          videolink1:"https://www.youtube.com/embed/ZRS485LxX0s",
          language:"english",
          heading:"Dbms placement series",
          educatorP1:"love babar ",
          educatorP2:"and 3 more",
          date:"22 videos",
          detailsP1:"carrer guidance | job assurance",
          detailsP2:"& More",
          working:"college student & working professional",
          price:"Rs. 20000.00",
          offprcie:"40000.00",
          discount:"50 %",
          buttoncontent1:"Explore",
          buttoncontent2:"Enroll Now",
          videolink:"https://www.youtube.com/embed/igGtZWTm0O4"
        },
        {
          courseno:5,
          image:"./assest/dbms-1.jpg",
          videolink1:"https://www.youtube.com/embed/ZRS485LxX0s",
          language:"english",
          heading:"Dbms placement series",
          educatorP1:"Priya Bhatiya ",
          educatorP2:"and 3 more",
          date:"Starts on 7 oct 2023",
          detailsP1:"carrer guidance | job assurance",
          detailsP2:"& More",
          working:"college student & working professional",
          price:"Rs. 20000.00",
          offprcie:"40000.00",
          discount:"50 %",
          buttoncontent1:"Explore",
          buttoncontent2:"Enroll Now",
          videolink:"https://www.youtube.com/embed/igGtZWTm0O4"
        },
        {
          courseno:6,
          image:"./assest/dbms-1.jpg",
          videolink1:"https://www.youtube.com/embed/ZRS485LxX0s",
          language:"english",
          heading:"Dbms placement series",
          educatorP1:"Priya Bhatiya ",
          educatorP2:"and 3 more",
          date:"Starts on 7 oct 2023",
          detailsP1:"carrer guidance | job assurance",
          detailsP2:"& More",
          working:"college student & working professional",
          price:"Rs. 20000.00",
          offprcie:"40000.00",
          discount:"50 %",
          buttoncontent1:"Explore",
          buttoncontent2:"Enroll Now",
          videolink:"https://www.youtube.com/embed/igGtZWTm0O4"
        },
        {
            courseno:1,
            image:"./assest/dsa-1.jpg",
            videolink:"https://www.youtube.com/embed/FuHfoe7U4Fg",
            language:"Hinglish",
            heading:"Dsa Placement Series",
            educatorP1:"Love Babbar ",
            educatorP2:"and 3 more",
            date:"140 lecture",
            detailsP1:"Complete Placement Prepration",
            // detailsP2:"& More",
            working:"college student & working professional",
            price:"Rs. 20000.00",
            offprcie:"40000.00",
            discount:"50% Discount",
            buttoncontent1:"Explore",
            buttoncontent2:"Enroll Now",
            videolink1:"https://www.youtube.com/embed/igGtZWTm0O4",
            src:"https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"
          },
          {
            courseno:2,
            image:"./assest/webdev-1.jpg",
            videolink1:"https://www.youtube.com/embed/lI7IIOWM0Mo",
            language:"english",
            heading:"Web development",
            educatorP1:"chai aur code ",
            educatorP2:"and 3 more",
            date:"Library -REACT ",
            detailsP1:"carrer guidance | job assurance",
            detailsP2:"& More",
            working:"college student & working professional",
            price:"Rs. 20000.00",
            offprcie:"40000.00",
            discount:"50 %",
            buttoncontent1:"Explore",
            buttoncontent2:"Enroll Now",
            videolink:"https://www.youtube.com/embed/igGtZWTm0O4",
            src:"https://www.youtube.com/results?search_query=chai+aur+code"
          },
          {
            courseno:3,
            image:"./assest/java-1.jpg",
            videolink1:"https://www.youtube.com/embed/ZRS485LxX0s",
            language:"english",
            heading:"Java placement course",
            educatorP1:"Apna college ",
            educatorP2:"and 3 more",
            date:"39 Lecture",
            detailsP1:"carrer guidance | job assurance",
            detailsP2:"& More",
            working:"college student & working professional",
            price:"Rs. 20000.00",
            offprcie:"40000.00",
            discount:"50 %",
            buttoncontent1:"Explore",
            buttoncontent2:"Enroll Now",
            videolink:"https://www.youtube.com/embed/igGtZWTm0O4",
            src:"https://www.youtube.com/watch?v=yRpLlJmRo2w&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop"
          },
     ];
    const [open,setOpen] = useState(false)
    const handleClickOpen =()=>{
      setOpen(true)
    }
    const handleClose =()=>{
        setOpen(false)
    }
    
    return(
        <div>
            <Nav2></Nav2>
            {/* <div onClick={()=>navigate('/Order')}>order</div> */}
          <div className='flex'>
          <form className='mt-20 border-2 shadow-md ml-24 p-8 h-[1200px]'>
                <div className='w-[250px]' >
                    <p className='font-bold text-xl mb-3'>Filter by Profession</p>
                     <input type="radio" id="working professional" name="Filter by profession" value="working professional"/>
                     <label for="working professional">working Professional</label>
                </div>
                <hr className='mt-5'></hr>
                <div className='w-[250px] mt-6' >
                    <p className='font-bold text-xl mb-5'>Filter by Program</p>
                     <input type="radio" id="Live" name="Live" value="Live"/>
                     <label for="Live">Live(9)</label>
                    <br></br>
                    <input type="radio" id="Trending" name="Trending" value="Trending"/>
                    <label for="Trending">Trending(9)</label>
                </div>
                <hr className='mt-5'></hr>
                <div className='w-[250px] mt-6' >
                    <p className='font-bold text-xl mb-5'>Domain</p>
                     <input type="radio" id="Artificial Intelligance" name="Artificial Intelligance" value="Artificial Intelligance"/>
                     <label for="Artificial Intelligance">Artificial Intelligance(4)</label>
                    <br></br>
                    <input type="radio" id="Finaance" name="Finaance" value="Finaance"/>
                     <label for="Finaance">Finaance(3)</label>
                    <br></br>
                    <input type="radio" id="Software Engneering" name="Software Engneering" value="Software EngneeringL"/>
                     <label for="Software Engneering">Software Engneering(2)</label>
                    <br></br>
                    <input type="radio" id="Workshop" name="Workshop" value="Workshop"/>
                     <label for="Workshop">Workshop(4)</label>
                </div>
                <hr className='mt-5'></hr>
                <div className='w-[250px] mt-6' >
                    <p className='font-bold text-xl mb-5'>Category</p>
                     <input type="radio" id="C++" name="C++" value="C++"/>
                     <label for="C++">C++ Development(4)</label>
                    <br></br>
                    <input type="radio" id="java" name="java" value="java"/>
                     <label for="java">java development(3)</label>
                    <br></br>
                    <input type="radio" id="java" name="java" value="java"/>
                    <label for="java">java development(9)</label>
                </div>
                <hr className='mt-5'></hr>
                <div className='w-[250px] mt-6' >
                    <p className='font-bold text-xl mb-5'>SubCategory</p>
                     <input type="radio" id="html" name="Filter by profession" value="HTML"/>
                     <label for="html">working Professional</label>
                    <br></br>
                    <input type="radio" id="html" name="Filter by profession" value="HTML"/>
                    <label for="html">working Professional</label>
                    <br></br>
                    <input type="radio" id="html" name="Filter by profession" value="HTML"/>
                    <label for="html">working Professional</label>
                </div>
                <hr className='mt-5'></hr>
                <div className='w-[250px] mt-6' >
                    <p className='font-bold text-xl mb-5'>Instructor</p>
                     <input type="radio" id="html" name="Filter by profession" value="HTML"/>
                     <label for="html">working Professional</label>
                    <br></br>
                    <input type="radio" id="html" name="Filter by profession" value="HTML"/>
                    <label for="html">working Professional</label>
                    <br></br>
                    <input type="radio" id="html" name="Filter by profession" value="HTML"/>
                    <label for="html">working Professional</label>
                </div>
                <hr className='mt-5'></hr>
                <div className='w-[250px] mt-6' >
                    <p className='font-bold text-xl mb-5'>Language</p>
                     <input type="radio" id="html" name="Filter by profession" value="HTML"/>
                     <label for="html">working Professional</label>
                    <br></br>
                    <input type="radio" id="html" name="Filter by profession" value="HTML"/>
                     <label for="html">working Professional</label>
                    <br></br>
                    <input type="radio" id="html" name="Filter by profession" value="HTML"/>
                     <label for="html">working Professional</label>
                </div>
             </form>
            <div className="grid grid-cols-3 grid-rows-3 gap-11 ml-[50px] mr-[40px] mt-20">
                {videos.map((item, index) => (
                    <div key={index} className="bg-blue-100 rounded-md p-2 relative">
                        <img alt='img' className='' src={item.image}></img>
                        <div style={{ backgroundColor: 'rgb(210, 97, 75)' }} className="rounded-full w-7 h-7  absolute top-20 left-40 ">
                            <PlayArrowRoundedIcon onClick={handleClickOpen} color=""/>
                        </div>
                        <div className="flex bg-white w-20 h-7 rounded absolute top-[150px] right-3">
                            <div className="rounded-full bg-red-600 w-1 h-1 mt-4 ml-2"></div>
                            <button className="ml-2" onClick={handleClickOpen}>English</button>
                        </div>
                        <div className="text-xl flex justify-between">
                            <b>
                                <div className="mt-3">
                                {item.heading}
                                </div>
                            </b>
                            <div style={{ backgroundColor: 'rgb(210, 97, 75)' }}className=" rounded-full w-9 h-9 mt-2  pl-2">
                            <ReplyIcon />
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="flex flex-col " >
                                < GirlSharpIcon color="disabled" className="mt-3"/>
                                <EventIcon color="disabled" className="mt-3"/>
                                <VideoLibraryIcon color="disabled" className="mt-3"/>
                                <SchoolIcon color="disabled" className="mt-3"/>
                            </div>
                            <div className="">
                                <div className="mt-3 ml-2">
                                    <b><a href={item.src}>{item.educatorP1}</a></b>
                                </div>
                                <div className="translate-x-[-20px] mt-3 ml-7 font-bold">
                                    {item.date}
                                </div>
                                <div className="mt-3 ml-2 flex">
                                    <b className="mr-2">{item.detailsP1}</b>
                                </div>
                                <div className="mt-3 ml-2"><b >{item.working}</b></div>
                            </div>
                        </div>
                        <hr className="mt-10 mr-10 ml-10"></hr>
                        <div className="flex justify-between ">
                            <button className="px-10 py-3 bg-gray-300 rounded-md" onClick={()=>navigate("/Explore")}>Explore</button>
                            <button style={{ backgroundColor: 'rgb(210, 97, 75)' }} className="pl-10 pr-10 py-3 rounded-md" onClick={()=>navigate("/Order")}>Enroll Now</button>
                        </div>
                        <Dialog open={open}>
                            <div className="rounded-md ">
                                <div className="flex justify-around mt-3">
                                    <div className="text-xl font-bold">Decode Java+DSA 1.0</div>
                                    <CloseIcon className='mt-1' onClick={handleClose} />
                                </div>
                                <iframe className="" 
                                src={item.videolink}>
                                </iframe>
                            </div>
                        </Dialog>
                    </div>
                    
                ))}
            </div>
            
          </div>
        </div>
    )
}
export default Courses;