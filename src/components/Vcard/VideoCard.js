import React, { useState } from "react";
// import "./VideoCard.css";
import GirlSharpIcon from '@mui/icons-material/GirlSharp';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ReplyIcon from '@mui/icons-material/Reply';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

import CloseIcon from '@mui/icons-material/Close';

import { useNavigate } from "react-router";

import { Dialog } from "@mui/material";

function VideoCard({singlevideos}){
  const navigate=useNavigate();

  const [open,setOpen] = useState(false)
    const handleClickOpen =()=>{
      setOpen(true)
    }
     const handleClose =()=>{
       setOpen(false)
    }

    return(
        <div style={{ width: "378px", height:"530px" }} className=" rounded-[20px] overflow-hidden ml-6 mr-6 bg-white">
             <div className="relative">
              <img className="w-full h-auto" alt="first-course"src={singlevideos.image}></img>
              <div style={{ backgroundColor: 'rgb(210, 97, 75)' }} className="rounded-full w-7 h-7  absolute top-20 left-48">
                <PlayArrowRoundedIcon onClick={handleClickOpen} color=""/>
              </div>
              <div className="flex bg-white w-20 h-7 rounded absolute top-44 right-1">
                <div className="rounded-full bg-red-600 w-1 h-1 mt-4 ml-2"></div>
                <button className="ml-2" onClick={handleClickOpen}>English</button>
              </div>
             </div>
             <div className="text-xl flex">
                <div className="">
                <b>
                    <div className="ml-10 mt-3">
                     {singlevideos.heading}
                    </div>
                    {/* <div className="ml-10">
                    for cloud
                    </div> */}
                </b>
                </div>
                <div style={{ backgroundColor: 'rgb(210, 97, 75)' }}className=" rounded-full w-9 h-9 mt-2 ml-20 pl-2">
                  <ReplyIcon />
                </div>
             </div>
             
             <div className="flex justify-around">
              <div className="flex flex-col ml-5 " >
                < GirlSharpIcon color="disabled" className="mt-3"/>
                <EventIcon color="disabled" className="mt-3"/>
                <VideoLibraryIcon color="disabled" className="mt-3"/>
                <SchoolIcon color="disabled" className="mt-3"/>
              </div>
              <div className="">
                <div className="mt-3 mr-28">
                    <b><a href={singlevideos.src}>{singlevideos.educatorP1}</a></b>
                     {/* {singlevideos.educatorP2} */}
                </div>
                <div className="translate-x-[-20px] mt-3 mr-28 ml-4 font-bold">
                    {singlevideos.date}
                </div>
                <div className="mt-3 flex">
                    <b className="mr-2">{singlevideos.detailsP1}</b>
                     {/* {singlevideos.detailsP2} */}
                </div>
                 <div className="mt-3"><b >{singlevideos.working}</b></div>
              </div>
            </div>
            <hr className="mt-10 mr-10 ml-10"></hr>
            {/* <div className="flex mt-6 ml-10">
                <b className="text-xl mr-1">{singlevideos.price}</b>
                <del className="mt-1">{singlevideos.offprcie}</del>
                <div className="flex ml-3">
                  <img alt="discount" src="./assest/img-discount-5.png" className=""></img>
                  <p className="text-green-500 mt-1 ml-1">
                    50% Discount
                  </p>
                </div>
                
            </div> */}
            <div className="flex justify-between mt-10">
                <button className="pl-16 pr-16 pt-5 pb-5 bg-gray-300 " onClick={()=>navigate("Explore")}>Explore</button>
                <button style={{ backgroundColor: 'rgb(210, 97, 75)' }} className=" pr-14 pl-16 pt-5 pb-5" onClick={()=>navigate("login")}>Enroll Now</button>
            </div>
            <Dialog open={open}>
              <div className="rounded-md p-2">
                <div className="flex justify-around mt-3">
                  <div className="text-xl font-bold">Decode Java+DSA 1.0</div>
                  <CloseIcon className='mt-1'  onClick={handleClose} />
                </div>
                
                {/* oveflow-hidden */}
                <iframe className="" 
                  src={singlevideos.videolink}>
                </iframe>
                
              </div>
           </Dialog>

        </div>
    )
}
export default VideoCard;