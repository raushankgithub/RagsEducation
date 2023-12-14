import React from "react";
// import IconCard from './IconCard';
import "./IconCard.css";
function IconCard({ data }) {
    return (
      <div className="card">
        <img alt="icon-1" src={data.image}></img>
        <div className="logo">
            <div className="p1">
               {data.data}
            </div>
            <div className="p2">
               {data.text}
            </div>
        </div>
      </div>
    );
}
export default IconCard;