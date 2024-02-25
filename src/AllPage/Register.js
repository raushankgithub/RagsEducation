import { useFormik } from "formik";
// import { signUpSchema } from "./schemas";
import { useDispatch } from "react-redux";
import { register } from "../redux/slices/auth";
import { signUpSchema } from "./schemas";
import { useNavigate } from "react-router";


const initialValues = {
  name: "",
  email: "",
  password: "",
};

function Register() {
  const navigate =useNavigate();
const dispatch = useDispatch();
  const {
    values,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    errors,
    resetForm,
    setValues,
  } = useFormik({
    initialValues: initialValues,
     validationSchema: signUpSchema,
    onSubmit: async(values,action) => {
      console.log('hello')
      const{name,email,password} = values;
      //await
      let result = await dispatch(register(values));
      console.log(result);
      alert(result);
      // console.log(result?.data?.status);
      /*
      if(result?.data?.status === "SUCCESS"){
        setValues(initialValues);
        alert(result?.data?.message);
        alert('register sucessfull welocme in rags edu');
        // alert(message);
        navigate("/Login");
      }else{
        console.log(result);
        //alert(result?.message)
        // alert(result?.status);
        alert(result);
      }
      */
      console.log("After reset:", values);
    }
    
  });



    return(
         <div className="flex h-[100vh]  top-0 ">
            <img  alt="banner" className="object-cover h-screen w-1/2 " src="./assest/signin.svg"></img>
            <div className="ml-11">
              <img  alt="logo" src="./assest/logo-3.png" className="w-28 mt-16 rounded-lg "/>  
              <div className="font-bold text-3xl w-2/3  mt-10">Get Onboard and jumpstart your career!</div> 
              <div className="font-thin mt-5">Please enter your details to register</div>
              {/* <MuiPhoneNumber efaultCountry={'us'} onChange={handleOnChange}></MuiPhoneNumber> */}
              <form className="bg-pink-50 mt-4 pt-1 pl-20 pb-10 rounded-md" onSubmit={handleSubmit}>
                <div className="mt-10 mb-4">
                  <label htmlFor="name" className="">
                      Name
                  </label>
                  <br></br>
                  <input className="bg-pink-50 outline-none border-2 flex-col w-96 pl-5 rounded-md  py-2" type="name" autoComplete="off" name="name" id="name" placeholder="name" values={values.name} onChange={handleChange} onBlur={handleBlur} />
                  {errors.name?<p>{errors.name}</p>:null}
                  
                </div>
                <div className="mt -16 mb-4">
                  <label htmlFor="email" className="">
                     Email
                  </label >
                  <br></br>
                  <input className="bg-pink-50 outline-none border-2 flex-col w-96 pl-5 rounded-md  py-2" type="email" autoComplete="off" name="email" id="email" placeholder="Email" values={values.email} onChange={handleChange} onBlur={handleBlur}/>
                  {errors.email?<p>{errors.email}</p>:null}
                </div>
                <div className="mt -16 mb-4">
                  <label htmlFor="password" className="">
                      Password
                  </label>
                  <br></br>
                  <input className="bg-pink-50 outline-none border-2 flex-col w-96 pl-5 rounded-md  py-2" type="password" autoComplete="off" name="password" id="password" placeholder="Password" values={values.password} onChange={handleChange} onBlur={handleBlur}/>
                  {errors.password?<p>{errors.password}</p>:null}
                </div>
               
                {/*ml-96 mr-10 mt-10 */}
                <div className="">
                <button className="bg-orange-500 p-2 rounded-md w-28 " type="submit" >Register</button>
                <button className="bg-blue-500 p-2 rounded-md ml-36"  onClick={()=>navigate("/Login")}>Already Register </button>
                </div>
              </form>
              {/* <p className="bg-blue-500 p-2 rounded-md ml-36" >Already Register </p> */}
            </div>

            
         </div>
       );
}
export default Register;