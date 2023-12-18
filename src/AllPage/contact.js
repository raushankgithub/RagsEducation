
function Contact(){
    return (
        <div className="bg-pink-200">
            <div className="h-20 bg-red-300 relative">
             <img src='./assest/logo-3.png' className="h-12  absolute mt-4 ml-24 rounded-md"></img>
            </div>
            <div className="font-bold text-xl w-72 ml-[600px] rounded-md mt-5">Send Your Query to Rags Edu Team !!</div>
            <div className="">
            <form action="https://formspree.io/f/xnqkkgjn" method="post" className="flex flex-col justify-center ml-60 gap-5">
                <input type="text" placeholder="username" name="username"  required className="w-72 outline-none border-2 border-black ml-[358px] mt-5 p-2"/>
                <input type='email' placeholder="Emali" name="Email" required  className="w-72 outline-none border-2 border-black ml-[358px] p-2"/>
                <textarea name='message' cols='' rows='4' placeholder="enter your message" required className="w-72 outline-none border-2 border-black ml-[358px] p-2"/>
                <button type="submit" className="bg-blue-500 w-20  p-2 rounded-md ml-[450px]  mb-4">Send</button>
            </form>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10915.03523508947!2d78.12128186255283!3d29.925256267822846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1701255263988!5m2!1sen!2sin" 
            width="100%" height="240" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          
        </div>
    )
}
export default Contact;