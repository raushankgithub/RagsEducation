import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ReplyIcon from '@mui/icons-material/Reply';
import SchoolIcon from '@mui/icons-material/School';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import GirlSharpIcon from '@mui/icons-material/GirlSharp';
import { useNavigate } from 'react-router';
// import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"

const FilterCourse=({products})=>{
    const navigate=useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    // Filter products based on the selected category
    const filteredProducts = selectedCategory === 'all'
      ? products
      : products.filter(product => product.category.includes(selectedCategory));
    //   === selectedCategory
    return(
        <div className='flex'>
            {/* <form className='mt-20 border-2 shadow-md ml-24 p-8 h-[1200px]'>
                <div className='w-[250px] mt-6' >
                    <p className='font-bold text-xl mb-5'>Category:</p>
                     <input type="radio" id="java" name="java" value="java"/>
                     <label for="java">Java course</label>
                    <br></br>
                    <input type="radio" id="webdev" name="webdev" value="webdev"/>
                     <label for="webdev">web Development course</label>
                    <br></br>
                    <input type="radio" id="dsa" name="dsa" value="dsa"/>
                    <label for="dsa">data structure</label>
                    <br></br>
                    <input type="radio" id="dbms" name="dbms" value="dbms"/>
                    <label for="dbms">Dbms</label>
                </div>
            </form> */}
          <div className='mt-20 border-2 shadow-md ml-24 p-8 h-[480px]'>
            <div className='w-[250px]'>
              <p className='font-bold text-xl mb-3 font-serif' >Filter by category</p>
              <p>
                <input
                  type="radio"
                  name="category"
                  value="all"
                  checked={selectedCategory === 'all'}
                  onChange={() => handleCategoryChange('all')}
                />
                All
              </p>

              <p>
                <input
                  type="radio"
                  name="category"
                  value="webdev"
                  checked={selectedCategory === 'webdev'}
                  onChange={() => handleCategoryChange('webdev')}
                />
                Web Development
              </p>

              <p>
                <input
                  type="radio"
                  name="category"
                  value="dsa"
                  checked={selectedCategory === 'dsa'}
                  onChange={() => handleCategoryChange('dsa')}
                />
                Data Structure
              </p>
              <p>
                <input
                  type="radio"
                  name="category"
                  value="dbms"
                  checked={selectedCategory === 'dbms'}
                  onChange={() => handleCategoryChange('dbms')}
                />
                Databse course
              </p>
              <p>
                <input
                  type="radio"
                  name="category"
                  value="ai"
                  checked={selectedCategory === 'ai'}
                  onChange={() => handleCategoryChange('ai')}
                />
                Artificial intelligance
              </p>
              <p>
                <input
                  type="radio"
                  name="category"
                  value="ml"
                  checked={selectedCategory === 'ml'}
                  onChange={() => handleCategoryChange('ml')}
                />
                Machine learning
              </p>
              <p>
                <input
                  type="radio"
                  name="category"
                  value="cs"
                  checked={selectedCategory === 'cs'}
                  onChange={() => handleCategoryChange('cs')}
                />
                Cyber Security
              </p>
              <p>
                <input
                  type="radio"
                  name="os"
                  value="python"
                  checked={selectedCategory === 'os'}
                  onChange={() => handleCategoryChange('os')}
                />
                Operating system
              </p>
            </div>
            <hr className='mt-5'></hr>
            <div className='w-[250px] mt-6'>
              <p className='font-bold text-xl mb-3 font-serif' >Filter by Language:</p>
              {/* <p>
                <input
                  type="radio"
                  name="category"
                  value="all"
                  checked={selectedCategory === 'all'}
                  onChange={() => handleCategoryChange('all')}
                />
                All
              </p> */}

              <p>
                <input
                  type="radio"
                  name="category"
                  value="C++"
                  checked={selectedCategory === 'C++'}
                  onChange={() => handleCategoryChange('C++')}
                />
                cpp
              </p>

              <p>
                <input
                  type="radio"
                  name="category"
                  value="java"
                  checked={selectedCategory === 'java'}
                  onChange={() => handleCategoryChange('java')}
                />
                Java
              </p>
              <p>
                <input
                  type="radio"
                  name="python"
                  value="python"
                  checked={selectedCategory === 'python'}
                  onChange={() => handleCategoryChange('python')}
                />
                Python
              </p>
            </div>
          </div>
          
            <div className="grid grid-cols-3 grid-rows-3 gap-11 ml-[53px] mr-[40px] mt-20">
                {filteredProducts.map((item, index) => (
                    <div key={index} className="bg-blue-100 rounded-md p-2 relative">
                        <img alt='img' className='' src={item.image} ></img>
                        <div style={{ backgroundColor: 'rgb(210, 97, 75)' }} className="rounded-full w-7 h-7  absolute top-20 left-40 ">
                            <PlayArrowRoundedIcon color=""/>
                        </div>
                        <div className="flex bg-white w-20 h-7 rounded absolute top-[150px] right-3">
                            <div className="rounded-full bg-red-600 w-1 h-1 mt-4 ml-2"></div>
                            <button className="ml-2" >English</button>
                        </div>
                        <div className="text-xl flex justify-between">
                            <b>
                                <div className="mt-3">
                                {item.heading}
                                </div>
                            </b>
                            <div style={{ backgroundColor: 'rgb(210, 97, 75)' }}className=" rounded-full w-9 h-9 mt-2  pl-2">
                            <ReplyIcon />
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="flex flex-col " >
                                < GirlSharpIcon color="disabled" className="mt-3"/>
                                <EventIcon color="disabled" className="mt-3"/>
                                <VideoLibraryIcon color="disabled" className="mt-3"/>
                                <SchoolIcon color="disabled" className="mt-3"/>
                            </div>
                            <div className="">
                                <div className="mt-3 ml-2">
                                    <b><a href={item.src}>{item.educatorP1}</a></b>
                                </div>
                                <div className="translate-x-[-20px] mt-3 ml-7 font-bold">
                                    {item.date}
                                </div>
                                <div className="mt-3 ml-2 flex">
                                    <b className="mr-2">{item.detailsP1}</b>
                                </div>
                                <div className="mt-3 ml-2"><b >{item.working}</b></div>
                            </div>
                        </div>
                        <hr className="mt-10 mr-10 ml-10"></hr>
                        <div className="flex justify-between ">
                            <button className="px-8 py-3 bg-gray-300 rounded-md"onClick={()=>navigate("/AddToCart")} >AddToCart</button>
                            <button style={{ backgroundColor: 'rgb(210, 97, 75)' }} className="pl-9 pr-9 py-3 rounded-md" onClick={()=>navigate("/Order")}>Enroll Now</button>
                        </div>
                        {/* <Dialog open={open}>
                            <div className="rounded-md ">
                                <div className="flex justify-around mt-3">
                                    <div className="text-xl font-bold">Decode Java+DSA 1.0</div>
                                    <CloseIcon className='mt-1' onClick={handleClose} />
                                </div>
                                <iframe className="" 
                                src={item.videolink}>
                                </iframe>
                            </div>
                        </Dialog> */}
                    </div>
                ))}
            </div>
            
        </div>
    )
}
export default FilterCourse;