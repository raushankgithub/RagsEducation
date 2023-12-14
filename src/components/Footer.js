import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
function Footer(){
    return(
        <div className="bg-black flex justify-around text-white pt-10 pb-28">
             <div>
                <img alt="img" src='./assest/pw-skill-logo.jpg' className="w-20 "></img>
                <div className='flex justify-between w-52 mt-10'>
                  <EmailIcon></EmailIcon>
                  <p>triplek2310@gmail.com</p>
                </div>
                <div className='flex justify-between w-40 mt-4'>
                  <SmartphoneIcon></SmartphoneIcon>
                  <p>+91 8290688546</p>
                </div>
                <div className='flex w-56 justify-between mt-8'>
                   <WhatsAppIcon></WhatsAppIcon>
                   <FacebookIcon></FacebookIcon>
                   <TelegramIcon></TelegramIcon>
                   <TwitterIcon></TwitterIcon>
                   <RedditIcon></RedditIcon>
                   <LinkedInIcon></LinkedInIcon>
                </div>
             </div>
             <div>
               <div className="text-xl">Company</div>
               <div className="rounded-lg bg-orange-500 w-68 h-1 mt-2 "></div>
               <div className="flex gap-20"> 
                    <div className="">
                        <p className="mt-3">About Us</p>
                        <p className="mt-3">Faq</p>
                        <p className="mt-3">Privacy Policy </p>
                    </div>
                    <div>
                        <p className="mt-3">Contact Us</p>
                        <p className="mt-3">Job Assurance</p>
                        <p className="mt-3">Terms and Condition</p>
                    </div>
               </div>
               
             </div>
             <div>
                <div className="text-xl">Products</div>
                <div className="rounded-lg bg-orange-500 w-68 h-1 mt-2"></div>
                <div className="flex gap-20"> 
                    <div className="">
                        <p className="mt-3">About Us</p>
                        <p className="mt-3">Faq</p>
                        <p className="mt-3">Privacy Policy </p>
                    </div>
                    <div>
                        <p className="mt-3">Contact Us</p>
                        <p className="mt-3">Job Assurance</p>
                        <p className="mt-3">Terms and Condition</p>
                    </div>
               </div>
             </div>
        </div>
    )
}
export default Footer;