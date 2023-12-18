import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import { useState } from 'react';
function Card1({cardinformation1}){ 
        const [isHovered, setIsHovered] = useState(false);

        const handleMouseEnter = () => {
          setIsHovered(true);
        };

        const handleMouseLeave = () => {
          setIsHovered(false);
        };

      const cardStyle = {
        // width: '200px',
        backgroundColor: isHovered ? `${cardinformation1.color}` : 'white',
        // border: '1px solid #ccc',
        // borderRadius: '8px',
        //transition: 'background-color 0.3s',
      };
      const buttonStyle = {
        backgroundColor: isHovered ? 'black' : 'white',
        color: 'white',
      };
      return(
         <div 
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         style={cardStyle}
         className= "flex-col w-96  mt-10 border-3 shadow-md rounded-lg ml-28 p-10 ">
            <img className="ml-2"alt="icon"src={cardinformation1.link}></img>
            <div className="text-2xl font-bold mt-6">
              {cardinformation1.heading}
            </div>
            <div className="font-thin">{cardinformation1.paragraph}</div>
            <div className='relative '>
              <button style={buttonStyle}  className="bg-black text-white rounded-md w-44 pt-2 pb-2 mt-6"> 
              <a href={cardinformation1.href}>
              EXPLORE NOW
              </a>
              </button>
                <div className=''>
                <ArrowRightAltTwoToneIcon className='absolute top-8 left-36 text-white '/>
                </div>
            </div>
        </div>
      )
}
export default Card1;