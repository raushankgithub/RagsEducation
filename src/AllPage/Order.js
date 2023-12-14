function Order(){
    return(
        <div >
           <div className="h-20 bg-red-300 relative">
             <img src='./assest/logo-3.png' className="h-12  absolute mt-4 ml-24 rounded-md"></img>
           </div>
           <div className="ml-[600px] mt-[100px] bg-pink-100 w-96 rounded-md px-6 pb-4">
             <div className="text-2xl font-bold flex justify-center pt-2">Order Details</div>
             <hr className="mt-4"></hr>
             <div className="flex pt-6">
                <img src='./assest/webdev-1.jpg'className="w-40 rounded-md "></img>
                <div className="ml-9">
                    <p> Web Development :</p>
                    <p>Mern Stack</p>
                </div> 
             </div>
             <div className="mt-6">Have a discount coupon</div>
             <div className="flex bg-green-100 rounded-md mt-4">
                <input className="p-2 rounded-md bg-green-100 h-12 border-none outline-none" type="text" placeholder="Enter Code Here">
                </input>
                <div className="ml-10 bg-red-300 w-20 rounded-md my-2 flex justify-center">Apply</div>
             </div>
             <div className="flex justify-between mt-4">
                <div>sub total</div>
                <div>Rs. 20000</div>
             </div>
             <div className="flex justify-between mt-4">
                <div>Discount</div>
                <div>Rs. 20000</div>
             </div>
             <hr className="mt-4"></hr>
             <div className="flex justify-between">
                <div className="font-bold">Total</div>
                <div className="font-bold">RS .20000</div>
             </div>
             <button className="mt-10 flex justify-center ml-16 bg-red-300 rounded-md p-3">Proceed to checkout</button>
           </div>
        </div>
    )
}
export default Order;