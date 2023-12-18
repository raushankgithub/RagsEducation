import { useState } from "react";
import CardSelect from "./CardSelect";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function CardListSelect(){

    const words = [
        { 
            id: 1,
            word: 'How to get Placements  ?',
            image: "https://www.youtube.com/embed/iBOzTJaIoNM",
            text: `For job placements and assistance: Enroll in our job assurance program for
                   resume building, mock interviews, job referrals, and an assured job opportunity. Opt for our job assistance 
                   course for resume building, mock interviews, and job alerts (job assurance not included)`
        },
        { 
            id: 2,
            word: 'What is an coding plateform ? How to use it ?',
            image: "https://www.youtube.com/embed/qTph1pj_rCo",
            text: `GeeksforGeeks (GFG) and LeetCode are popular coding platforms where users can practice coding, 
            improve problem-solving skills, and prepare for technical interviews through a variety of coding challenges 
            and tutorials.






            `
        },
        {   id: 3,
            word: 'how to upload project on github?', 
            image: "https://www.youtube.com/embed/Ez8F0nW6S-w",
            text: `GitHub is a web platform for hosting and managing code repositories, enabling collaboration 
            and version control in software development.` 
        },
        {   id: 4,
            word: 'I need to purchase a course. Whom should I contact ?', 
            image: "https://www.youtube.com/embed/_z2MU-2JXxY",
            text: `Vercel and Render are cloud platforms for deploying web applications. Vercel specializes in
             front-end and serverless deployments, while Render supports various applications with one-click deployment 
             and integrated services. Choose based on your project's specific needs and preferences.






            ` 
        },
        // Add more words as needed
      ];

      const [selectedWord, setSelectedWord] = useState(words[0]);

      const handleWordClick = (word) => {
        setSelectedWord(word);

      };
    return(
        <div className='flex justify-around'>
            <div className="">
                {words.map((word) => (
                    //transition-transform duration-500 ease-in-out transform translate-y-0
                <div className="flex mt-12 font-bold text-xl " key={word.id} onClick={() => handleWordClick(word)}>
                    <div>{word.word}</div>
                    <ArrowForwardIcon className="ml-10"/>
                    
                </div>
                ))}
            </div>

            {selectedWord && <CardSelect word={selectedWord} />}
        </div>
    )
}
export default CardListSelect;