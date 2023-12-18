import { Navigate, useActionData, useNavigate } from "react-router";

function Payment(){
    const navigate=useNavigate();
    const handleclick=()=>{
        alert(' Course Purchase Succesfully');
        navigate("/")
    }
    return(
        <div>
            <div className="h-20 bg-red-300 relative">
             <img src='./assest/logo-3.png' className="h-12  absolute mt-4 ml-24 rounded-md"></img>
           </div>
            <div className="rounded-md box-shadow-2  border-2 mt-20 mx-[600px]  ">
              <div className="bg-blue-400 pl-[100px] py-2">Payment Details</div>
              {/* <hr className="ml-[100px]"></hr> */}
              <div className="flex justify-around mt-10">
                <div className=" w-10 ml-10">
                <select id="currency" name="currency" className="outline-none border-2 rounded-md">
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr" selected>INR</option>
                    <option value="gbp">GBP</option>
                </select>
                </div>
                <div className="rounded-md border-2 w-20 flex justify-center">3600</div> 
              </div>
              <hr className="mt-6 mx-5"></hr>
              <div className="flex justify-around mt-6">
                <div>card number</div>
                <img src="./assest/payment-1.png" className="w-20"></img>
              </div>
              <input type="tel" maxLength="[0-9]{12}"  className="w-32 border-2 rounded-md ml-20 mt-6 px-2 outline-none " required></input>
              <hr className="mt-6 mx-5"></hr>
              <div className="flex  justify-around mt-6">
                <div>
                  <div className="">cvv</div>
                   <input className="w-8 rounded-md border-2 mt-3"></input>
                </div>
                <div>
                   <div className="flex gap-5 ">expiry </div>
                   <input className="w-6 border-2 rounded-md mt-3 outline-none"></input>
                   <input className="w-6 border-2 rounded-md mt-3 outline-none ml-6"></input>
                </div>
              </div>
              <div className="mt-10 rounded-md p-2 bg-green-500 flex justify-center mx-16 mb-10" onClick={handleclick}> make payment</div>
              
           </div>
        </div>
    )
}
export default Payment;