import React from "react";
// import IconCard from "./IconCard";
// import "./CardList.css";
function CardList({ item }) {
    return (
      <div className="flex py-10 justify-center items-center "> 
      <div className="w-11/12  flex justify-between ">
        {item.map((iconCard) => (
          <div className="flex px-2 shadow-md py-3 rounded-lg">
            <img alt="icon-1" src={iconCard.image}></img>
            <div className="px-5">
                <div 
                // className={`${iconCard.id%2===0 ? "bg-red-500" : "bg-green-500"}`}
                >
                  {iconCard.data}
                </div>
                <div className="p2">
                  {iconCard.text}
                </div>
            </div>
        </div>
        ))}
        </div>
      </div>
    );
}
export default CardList;