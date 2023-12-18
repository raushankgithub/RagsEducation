import {loadStripe} from '@stripe/stripe-js';
import { useState } from 'react';
import Payment from './Payment';
import { useNavigate } from 'react-router';
function Order(){
      // let disc=0;
      const price=4000;
      // let total=20000;
      const [couponCode, setCouponCode] = useState('');
      const [total,settotal]=useState(20000);
      const [disc,setdisc]=useState(0);
      const handleInputChange = (event) => {
         setCouponCode(event.target.value);
      };
      const handleApplyClick = () => {
         if (isValidCouponCode(couponCode)) {
            alert('Coupon code is valid!');
            // let disc=2000;
            // let total=price-disc;
            const newDisc = 400;
            setdisc(newDisc);
            settotal(price - newDisc);
         } else {
         
            alert('Invalid coupon code. Please try again.');
         }
      };
      const isValidCouponCode = (code) => {
         const validCodes = ['CODE1', 'CODE2', 'CODE3','CODE5','CODE6','CODE7','CODE8','CODE9','CODE10'];
         return validCodes.includes(code);
      };
      //payment integration
      const payment=async()=>{
         const stripe=await loadStripe("pk_test_51OOEPHSJXvLS3byOeCNbJ7WSUgG0btWwD7T1Q5cdmelCHIETFCpFRvCT4a5JNWawul6Mu9CBRCw3Tt9GFZDMoOOk00SKNoSA1t");
      };
      const navigate=useNavigate();

    return(
        <div >
           <div className="h-20 bg-red-300 relative">
             <img src='./assest/logo-3.png' className="h-12  absolute mt-4 ml-24 rounded-md"></img>
           </div>
           <div className="ml-[600px] mt-[100px] bg-pink-100 w-96 rounded-md px-6 pb-4">
             <div className="text-2xl font-bold flex justify-center pt-2">Order Details</div>
             <hr className="mt-4"></hr>
             <div className="flex pt-6">
                <img src='./assest/dsa-1.jpg'className="w-40 rounded-md "></img>
                <div className="ml-9">
                    <p> Data Structure :</p>
                    {/* <p>Mern Stack</p> */}
                </div> 
             </div>
             <div className="mt-6">Have a discount coupon</div>
             <div className="flex bg-green-100 rounded-md mt-4">
                <input className="p-2 rounded-md bg-green-100 h-12 border-none outline-none" type="text" placeholder="Enter Code Here" value={couponCode}
                onChange={handleInputChange}>
                </input>
                <div className="ml-10 bg-red-300 w-20 rounded-md my-2 flex justify-center"  onClick={handleApplyClick}>Apply</div>
             </div>
             <div className="flex justify-between mt-4">
                <div>sub total</div>
                <div>Rs. {price}</div>
             </div>
             <div className="flex justify-between mt-4">
                <div>Discount</div>
                <div>Rs. {disc}</div>
             </div>
             <hr className="mt-4"></hr>
             <div className="flex justify-between">
                <div className="font-bold">Total</div>
                <div className="font-bold">RS .{total}</div>
             </div>
             <button className="mt-10 flex justify-center ml-16 bg-red-300 rounded-md p-3" onClick={()=>navigate("/Payment")}>Proceed to checkout</button>
           </div>
        </div>
    )
}
export default Order;