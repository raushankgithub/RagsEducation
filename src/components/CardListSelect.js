import { useState } from "react";
import CardSelect from "./CardSelect";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function CardListSelect(){

    const words = [
        { 
            id: 1,
            word: 'How to get Placements and Job assistance ?',
            image: "https://www.youtube.com/embed/vB2Qv6cSQUg",
            text: `For job placements and assistance: Enroll in our job assurance program for
                   resume building, mock interviews, job referrals, and an assured job opportunity. Opt for our job assistance 
                   course for resume building, mock interviews, and job alerts (job assurance not included)`
        },
        { 
            id: 2,
            word: 'What is an experience portal ? How to use it ?',
            image: "https://www.youtube.com/embed/HK7lHIbEQP4",
            text: `Our experience portal offers real-time industrial projects for students and professionals. These unpaid,
                   remote, and self-paced internships provide valuable experience. Choose and complete as many projects as you 
                   like to receive an internship experience letter. Students as well as working professionals can do these internships.`
        },
        {   id: 3,
            word: 'I am not able to view my enrolled course. What to do/whom to contact ?', 
            image: "https://www.youtube.com/embed/7leHXde8l3k",
            text: `To access your enrolled course, ensure you have logged in at learn.pwskills.com. If the
                   course is still not visible, email your payment receipt to support@pwskills.com for assistance within 24 hours.` 
        },
        {   id: 4,
            word: 'I need to purchase a course. Whom should I contact ?', 
            image: "https://www.youtube.com/embed/i0K3ST1hK7Q",
            text: `Contact our counselors through the chat support on our website. Look for the chat option on the 
                   bottom right of the Homepage. Name the course your'e 
                   interested in, and the counseling team will guide you through the admission process.` 
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