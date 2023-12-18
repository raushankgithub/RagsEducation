import { useState } from "react";
import { useNavigate } from "react-router";

function AddToCart(){
    // const value=0;
    const [item1,setitem1]=useState(0);
    const [item2,setitem2]=useState(0);
    const [item3,setitem3]=useState(0);
    const [item4,setitem4]=useState(0);
    const handleckickplus=(counterSetter)=>{
        counterSetter((prevCount) => prevCount + 1);
    }
    const handleckickminus=(counterSetter)=>{
        counterSetter((prevCount) => Math.max(0, prevCount - 1));
    }
    const Subtotal=item1*4000;
    const salestax=Subtotal/10;
    const grandtotal=Subtotal+salestax;
    const navigate=useNavigate();
    const handleclick=()=>{
          alert('course save succesfully!!')
          navigate('/Courses')
    }
    return(
        <div>
            <div className="h-20 bg-red-300 relative">
             <img src='./assest/logo-3.png' className="h-12  absolute mt-4 ml-24 rounded-md"></img>
            </div>
            <div className="flex justify-center text-3xl font-serif mt-10 ">
                Your Cart(1 Items)
                
            </div>
            <div className="mx-[600px] border-2 border-black"></div>
            
            <div className="flex justify-around  mt-6">
                <b className="w-[570px]">Item</b>
                {/* <div className=""> */}
                <b>Price</b>
                <b>Quantity</b>
                <b>Total</b>
                {/* </div> */}
            </div>
            <hr className="mx-24"></hr>
            <div className="mx-[95px] py-3 flex justify-between">
                <div className="w-[640px]">
                <img src='./assest/dsa-1.jpg ' className="h-20"></img>
                </div>
                <p>Rs. 4000/-</p>
                <div className="flex h-10  border-2 rounded-lg p-2 border-black ">
                    <button className="bg-pink-400 w-10 flex justify-center" onClick={()=>handleckickplus(setitem1)}>+</button>
                    <button className="bg-orange-200 w-10 flex justify-center">{item1}</button>
                    <button className="bg-pink-400 w-10 flex justify-center"onClick={()=>handleckickminus(setitem1)}>-</button>
                </div>
                <p>Rs. {item1*4000}/-</p>
            </div>
            <hr className="mx-24"></hr>
            {/* <div className="mx-[95px] py-3 flex justify-between">
                <div className="w-[640px]">
                <img src='./assest/webdev-1.jpg ' className="h-20"></img>
                </div>
                <p>Rs. 4000/-</p>
                <div className="flex h-10  border-2 rounded-lg p-2 border-black">
                    <button className="bg-pink-400 w-10 flex justify-center" onClick={()=>handleckickplus(setitem2)}>+</button>
                    <button className="bg-orange-200 w-10 flex justify-center">{item2}</button>
                    <button className="bg-pink-400 w-10 flex justify-center"onClick={()=>handleckickminus(setitem2)}>-</button>
                </div>
                <p>Rs.{item2*4000}/-</p>
            </div>
            <hr className="mx-24"></hr>
            <div className="mx-[95px] py-3 flex justify-between">
                <div className="w-[640px]">
                <img src='./assest/java-1.jpg ' className="h-20"></img>
                </div>
                <p>Rs.4000/-</p>
                <div className="flex h-10  border-2 rounded-lg p-2 border-black">
                    <button className="bg-pink-400 w-10 flex justify-center" onClick={()=>handleckickminus(setitem3)}>+</button>
                    <button className="bg-orange-200 w-10 flex justify-center">{item3}</button>
                    <button className="bg-pink-400 w-10 flex justify-center"onClick={()=>handleckickminus(setitem3)}>-</button>
                </div>
                <p>Rs.{item3*4000}/-</p>
            </div>
            <hr className="mx-24"></hr>
            <div className="mx-[95px] py-3 flex justify-between">
                <div className="w-[640px]">
                <img src='./assest/dbms-1.jpg ' className="h-20"></img>
                </div>
                <p>Rs. 4000/-</p>
                <div className="flex h-10  border-2 rounded-lg p-2 border-black">
                    <button className="bg-pink-400 w-10 flex justify-center" onClick={()=>handleckickminus(setitem4)}>+</button>
                    <button className="bg-orange-200 w-10 flex justify-center">{item4}</button>
                    <button className="bg-pink-400 w-10 flex justify-center"onClick={()=>handleckickminus(setitem4)}>-</button>
                </div>
                <p>Rs.{item4*4000}/-</p>
            </div> */}
            <hr className="mx-24"></hr> 
            <div className="mx-[600px] text-lg font-serif border-2 rounded-md mt-10 border-black p-4">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>Rs.{Subtotal} /-</p>
                </div>
                <hr></hr>
                <div className="flex justify-between">
                    <p>Sales Tax</p>
                    <p>Rs.{salestax}/-</p>
                </div>
                <hr></hr>
                {/* <div className="flex justify-between">
                    <p>Coupon Code</p>
                    <p>Rs.20000 /-</p>
                </div>
                <hr></hr> */}
                <div className="flex justify-between">
                    <p>Grand Total</p>
                    <p>Rs.{grandtotal} /-</p>
                </div>
                <hr></hr>
                
            </div>
            <button className="bg-blue-500 rounded-md flex justify-center ml-[740px] mt-20 p-1 w-20 "onClick={handleclick}>Save</button>


        </div>
    )
}
export default AddToCart;