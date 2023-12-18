import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router';
function UserDetails(){
    const navigate=useNavigate();
    return(
        <div>
            <div className="border-2 box-shadow-2 flex ">
                <img src='./assest/logo-3.png' className="w-[150px] ml-10 my-5 border-2 "></img> 
                <ArrowBackIosIcon sx={{ fontSize: 50 }} className='mt-6 ml-20 font-' ></ArrowBackIosIcon>
                <div className='mt-8 text-xl font-thin' onClick={()=>navigate('/Login')}>Back</div>   
            </div>
            
            <div className='border-2 box-shadow-2 mx-[400px] rounded-md mt-20 p-10 '>
                <div className="text-xl font-serif font-bold flex justify-center mb-10">Profile Details</div>
                <div className='flex'>
                    <img src='./assest/user-icon.jpg' className='w-20 mr-20'></img>
                    <div className='font-thin'>
                        <div className='font-extralight'>Personal details</div>
                        <hr className='w-[400px]'></hr>
                        <div className='font-light flex gap-16 mt-5  '>
                           <div className=''>
                            <div>Name:</div>
                            <div>Mobile No.</div>
                            <div>Email:</div>
                            <div>City:</div>
                           </div>
                           <div className=''>
                            <div>Raushan kumar</div>
                            <div>+91 8290688546</div>
                            <div>triplek2310@gmail.com</div>
                            <div>Haridwar</div>
                        </div>
                        </div>    
                    <div>
                    </div>
                    </div>
                </div>
                <hr className='ml-[160px] mt-6'></hr>
                <button className='bg-black text-white p-1 w-16 rounded-md ml-[300px] mt-10'>Edit</button>
            </div>
        </div>
    )
}
export default UserDetails;