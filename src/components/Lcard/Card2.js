import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import { useState } from 'react';
function Card2({ cardinformation2 }) {
       //button:-absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white border-none py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer
        //card:-relative w-72 p-4 bg-white shadow-md group hover:shadow-lg transition duration-300 ease-in-out
        const [isHovered, setIsHovered] = useState("false");

        const handleMouseEnter = () => {
          setIsHovered(true);
        };

        const handleMouseLeave = () => {
          setIsHovered(false);
        };

      const cardStyle = {
        // width: '200px',
        backgroundColor: isHovered ? `${cardinformation2.color}` : 'white',
        // border: '1px solid #ccc',
        // borderRadius: '8px',
        //transition: 'background-color 0.3s',
      };
      const buttonStyle = {
        backgroundColor: isHovered ? 'black' : 'white',
        color: 'white',
      };
    return (
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={cardStyle} 
        className="flex-col w-96 mt-10 border-3 shadow-md rounded-lg mr-4 p-10 ml-16">

            <img className="ml-2"alt="icon"src={cardinformation2.link}></img>
            <div className="text-2xl font-bold mt-6">
              {cardinformation2.heading}
            </div>
            <div className="font-thin">{cardinformation2.paragraph}</div>
            <div className='relative'>
              <button style={buttonStyle} className="bg-black text-white rounded-md w-44 pt-2 pb-2  mr-28 mt-6"> EXPLORE NOW</button>
                <div className=''>
                <ArrowRightAltTwoToneIcon className='absolute top-8 left-36 text-white '/>
                </div>
            </div>
        </div>
    );
}

export default Card2;