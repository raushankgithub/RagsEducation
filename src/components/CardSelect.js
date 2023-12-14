//import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//import { useState } from 'react';
//import CardListSelect from './CardListSelect';

function CardSelect({word}){
    return(
        <div className="w-1/3 p-12 bg-red-200 mb-16  ">
            <iframe className=" rounded-lg ml-10" src={word.image}  />
            <p className="mt-10">{word.text}</p>
        </div>
    );
}

export default CardSelect;