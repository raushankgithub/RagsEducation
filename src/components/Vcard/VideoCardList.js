import React from "react";
import VideoCard from "./VideoCard";
// import"./VideoCardList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "pink",postion:"absolute",left:"0", marginTop:"380px",marginLeft:"600px",height:"18px",width:"18px",borderRadius:"10px"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "pink",postion:"absolute",left:"0", marginTop:"380px" ,marginLeft:"650px",borderRadius:"10px",width:"18px",height:"18px"}}
        onClick={onClick}
      />
    );
  }
  

function VideoCardList({carddetails}){
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow style={{marginTop:"10px",display:"flex", justifyContent:"center", alignItems:"center"}}/>,
        prevArrow: <SamplePrevArrow />
      };
    return(
    <div className="py-10 ml-20">
            <Slider {...settings} > 
            {carddetails.map((videoinfo)=>(      
                <VideoCard singlevideos={videoinfo}/>
            ))}  
           </Slider>
    </div>
    );
}
export default VideoCardList;