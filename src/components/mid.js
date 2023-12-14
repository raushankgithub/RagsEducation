import React,{useEffect, useState}from "react";
import Typed from "typed.js";
 import CardList  from "./Icard/CardList";
 import CardListSelect from "./CardListSelect";

//  import Footer from "./Footer";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import "./mid.css";
import VideoCardList from "./Vcard/VideoCardList";
import Card1 from"./Lcard/Card1";
import Card2 from"./Lcard/Card2";
import Footer from "./Footer";

import Slider from 'react-slick';
// import { Dialog } from "@mui/material";
// import { useState } from "react";
        const item=[
            {
                id:1,
                image:"./assest/statistics1-icon.png",
                data:"55%",
                text:"Average Salary Hike"
            },
            {
                id:2,
                image:"./assest/statistics2-icon.png",
                data:"600+",
                text:"Different Courses"
            },
            {
                id:3,
                image:"./assest/statistics3-icon.png",
                data:"12000+",
                text:"Career Transition"
            },
            {
                id:4,
                image:"./assest/statistics4-icon.png",
                data:"400+",
                text:"Hiring Patners"
            }
       ];
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
            heading:"Os placement series",
            educatorP1:"Love Babbar ",
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
            heading:"Computer Network",
            educatorP1:"Neso Academy ",
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
          }
       ]

    //for lastcard:-
    const Lcard1=[
        {
           id:1,
           link:"./assest/products-icon1.png",
           paragraph:"Buying a new PC is no longer required, Access unlimited computing power!",
           heading:"PW Skills Lab",
           color:"pink"
        },
        {
            id:2,
            link:"./assest/products-icon2.png",
            paragraph:"Self-paced portal prioritizes hands-on training with 570+ internship projects.",
            heading:"Experience Portal",
            color:"red"
        },
        {
            id:3,
            link:"./assest/products-icon3.png",
            paragraph:"Our student placements and 100K+ career transitions speak volumes",
            heading:"Hall Of Fame",
            color:"lightblue"
        },
       
    ]
    const Lcard2=[
        {
            id:4,
            link:"./assest/products-icon4.png",
            paragraph:"Use exceptional templates for a stand-out resume minus the sign up process.",
            heading:"Job Portal",
            color:"yellow"
        },
        {
            id:5,
            link:"./assest/products-icon5.png",
            paragraph:"Explore affiliate marketing opportunities and attain financial freedom.",
            heading:"building block",
            color:"orange"
        }
    ];

    const company1=[
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

    


function Mid() {
    // const[color,setcolor]=useState("white");
    // const[bgcolor,setbgcolor]=useState("white");
    // const handling=(event)=>{
    //     setcolor("white");
    //     setbgcolor("white");
    // }

    useEffect(() => {
        
        const options = {
            strings: [" PRACTICAL ", " AFFORDABLE ", " EASY "],
            typeSpeed: 150,
            backSpeed: 200,
            loop: true,
        };

        const typed = new Typed(".span-tag", options);
        
        return () => {
            // Clean up Typed.js instance when the component unmounts
            typed.destroy();
        };
    }, []);

    const settings1 = {
        dots: false,
        infinite: true,
        slidesToShow: 4.2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        //nextArrow:<ArrowRightIcon style={{marginTop:"10px",display:"flex",justifyContent:"center", alignItems:"center"}}/>,
        //prevArrow:<ArrowLeftIcon/>
      };
    
    //onclick={handling}
    return (
    <div >
        
        {/* <img alt="message" src="./assest/message-3.jpg" className="sticky"></img>        */}
        <div className="mid-parent">
            <div className="right">
                <div className="top"></div>
                <b className="line1">
                    Upscaling Made 
                    <div className="part">
                       {"<"}
                       <span className="span-tag"></span>
                       {">"}
                    </div>
                </b>
                <b className="line2">
                    With Rags Education
                </b>
                <div className="bottom">
                    <div className="l1">Welcome to Rags Education, your go-to hub for free and diverse learning resources. </div>
                    <div className="l2">Join us on a journey of discovery, where knowledge is limitless, and education is for everyone.</div>
                    <div className="l3">Explore, learn, and thrive with Rags Education!</div>
                </div>
                <button className="bottom-button">EXPLORE CORSES</button>
            </div>
            <img src="./assest/pw-image.png" alt="midimage" className="left" />
        </div>
        {/* <div className="logo-item">
              {/* <SignalCellularAltSharpIcon/>
              <CollectionsBookmarkIcon/> 
               <img alt="1-icon" src="./assest/statistics1-icon.png"/>
              <img alt="2-icon" src="./assest/statistics2-icon.png"/>
              <img  alt="3-icon" src="./assest/statistics3-icon.png"/>
              <img alt="4-icon" src="./assest/statistics4-icon.png"/>
        </div> */}
        <CardList item={item} className="logo-item"/>
        <div className="mid-head">
            <b className="c1">Our Course</b>
            <div className="parent1">
               <button className="butt">View All</button>
                 <div className="child1">
                    <ArrowRightAltTwoToneIcon />
                 </div>
            </div>    
        </div>
        <div className="line-item">
            <div>
              Trending
            </div>
            <div>
                Live
            </div>
            <div>
                Community
            </div>
        </div>
        <div className="linig">
            <hr></hr>
        </div>
        <div className="bg-pink-50 ">
            <VideoCardList className="bg-pink-500" carddetails={videos}/>
        </div>
        <div style={{marginLeft:"-900px"}} className="mt-32">
           <div ><b className="text-3xl ml-0 mr-16">Explore Our Ecosystem</b></div>
           <div className="mt-2 font-thin ml-10">A one-stop destination for all your learning to placement needs</div>
        </div>
        <div  className="flex justify-between">
            <div>
            {
                Lcard1.map((cardinformation1)=>(
                
                    <Card1  cardinformation1={cardinformation1}></Card1>
                    //color={color} bgcolor={bgcolor}
                ))
                                
            }
            </div>
            <div className="mt-36">
            {
               Lcard2.map((cardinformation2)=>(
                
                <Card2 cardinformation2={cardinformation2}></Card2>
               ))
            }
            </div>
            <div>
                <img alt="abc" src="./assest/gif-2.gif" className="mt-72 ml-16 w-3/4 rounded-md"></img>
            </div>
            
            
        </div>
        <div>
            {/* <div className="flex mt-10 relative">
                <div style={{backgroundColor: 'rgb(25, 42, 54)'}} className="w-1/2 h-screen ">
                    <div style={{backgroundColor: 'rgb(57, 141, 200)',marginLeft:'100px'}} className="absolute w-56 h-56 rounded-full top-1/4 left-1/3 pl-44"></div>

                </div>
                <img className="w-1/2 h-screen object-cover" alt="banner1" src="./assest/banner-1.png"></img>
            </div> */}
            <div style={{backgroundAttachment:"fixed", backgroundImage: "url('./assest/banner-1.png')"}} className="min-h-screen bg-cover bg-center bg-no-repeat pl-96 pt-44 mt-10">
                <div  className="w-44 ml-56 mt-10 h-44 rounded-full bg-emerald-300 "></div>
                           
            </div>
            <div style={{backgroundAttachment:"fixed", backgroundImage: "url('./assest/banner-2.png')"}} className="min-h-screen bg-cover  bg-no-repeat pl-96 pt-44">
                <div  className="w-44 ml-56 mt-10 h-44 rounded-full bg-pink-500 "></div>
                           
            </div>
            <div style={{backgroundAttachment:"fixed", backgroundImage: "url('./assest/banner-3.png')"}} className="min-h-screen bg-cover  bg-no-repeat pl-96 pt-44">
                <div  className="w-44 ml-56 mt-10 h-44 rounded-full bg-lime-300"></div>        
            </div>
            <div style={{backgroundAttachment:"fixed", backgroundImage: "url('./assest/banner-4.png')"}} className="min-h-screen bg-cover bg-center bg-no-repeat pl-96 pt-44">
                <div  className="w-44 ml-56 mt-10 h-44 rounded-full bg-orange-400 "></div>          
            </div>
            
         </div>
        <div className='mx-[100px] pb-10'>
            <div className="flex mt-20 justify-center text-2xl font-bold">Our Achievers Work With</div>
            <Slider {...settings1}  >
            {company1.map((info)=>(
            <div className='mt-20 pb-10'>
               <img className='border-2 rounded-lg w-44 h-20 p-5 object-cover shadow-md' alt="company"src={info.link}></img>  
            </div>
            ))}
            </Slider>
        </div>
        <CardListSelect></CardListSelect>
        <Footer className=''></Footer>
        
        
    </div>
        
    );
}

export default Mid;
