import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginSchema } from "./schemas/index2";
import { login } from "../redux/slices/auth";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import UserDetails from "./UserDetails";

//authantication with firebase:-
import {auth,provider} from './config';
import {signInWithPopup} from "firebase/auth";
import User from "./User";

import GoogleIcon from '@mui/icons-material/Google';

const initialValues = {
  username: "",
  password: "",
};

function Login(){
const navigate =useNavigate();
const dispatch = useDispatch();
const{
handleBlur,
handleChange,
handleSubmit,
values,
errors
  }=useFormik({
    initialValues:initialValues,
    validationSchema:loginSchema,
    onSubmit: async(values,action)=>{
      console.log('Submitting form');
      const{ username, password } = values
      console.log('Form values:', values);
      const result =await dispatch(login(values))
      console.log(result);
      if(result){
        console.log("logined");
      }
      //
      if(result?.data?.status === "SUCCESS"){
        
        alert(result?.data?.message);
        console.log(result)
        navigate('/UserDetails');
      }
      else{
        alert(result?.data?.message)
      }
      //

      console.log(values)

    }
  });
  const [value,setvalue]=useState('');
  const handleclick=()=>{
    try{
    signInWithPopup(auth,provider).then((data)=>{
      setvalue(data.user.email)
      localStorage.setItem("email",data.user.email)
    })
    }
    catch(error){
       console(error);
    }
  }
  useEffect(()=>{
    setvalue(localStorage.getItem('email'))
  },[])
    return(
         <div className="flex h-[100vh] fixed top-0 ">
            <img  alt="banner" className="object-cover h-screen w-1/2 " src="./assest/signin.svg"></img>
            <div className="ml-11">
              <img  alt="logo" src="./assest/logo-3.png" className="w-28 mt-16 rounded-lg "/>  
              <div className="font-bold text-3xl w-2/3  mt-10">Get Onboard and jumpstart your career!</div> 
              <div className="font-thin mt-5">Please enter your details to login</div>
             
              <form className="bg-pink-50 mt-5 pt-1 pl-20 pb-10 rounded-md" onSubmit={handleSubmit}>
                <div className="mt-10 mb-4">
                   {value ? <User/>:
                      <div className="flex border-2 rounded-md bg-purple-300 p-1 gap-2 mr-[200px] ml-[100px]"style={{cursor:'pointer'}} onClick={handleclick}>
                      <div className="text-lg font-thin ">Sing in with google</div>
                      <GoogleIcon color="secondary" className="mt-1"></GoogleIcon>
                      </div>
                   }
                </div>
                <div >
                  <label htmlFor="email" className="">
                     Email
                  </label >
                  <br></br>
                  <input className="bg-pink-50 outline-none border-2 flex-col w-96 pl-5 rounded-md  py-2" type="email"  name="username" id="email" placeholder="Email" value={values.username} onChange={handleChange} onBlur={handleBlur}/>
                  {errors.username?<p>{errors.username}</p>:null}
                </div>
                <div className=" mb-4">
                  <label htmlFor="password" className="">
                      Password
                  </label>
                  <br></br>
                  <input className="bg-pink-50 outline-none border-2 flex-col w-96 pl-5 rounded-md  py-2" type="password"  name="password" id="password" placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                  {errors.password?<p>{errors.password}</p>:null}
                </div>
                 <button className="bg-orange-500 p-1 rounded-md w-28 cursor-pointer " type="submit" >Login</button>
                 <div className="flex mt-10">
                 <p className="bg-green-300 p-1 rounded-md w-32 cursor-pointer" onClick={()=>navigate("/Update")}>Update Details</p>
                 <p className="bg-red-300 p-1 rounded-md  w-32 ml-32 cursor-pointer" >forgot password</p>
                 </div>
                 

              </form>
            </div>

            
         </div>
       );
}
export default Login;