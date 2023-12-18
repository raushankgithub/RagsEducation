function User(){
    const Logout=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return(
        <div className="">
            <div className="font-serif flex justify-center mr-20">
             Login succesfully!!!
            </div>
            <button onClick={Logout} className="bg-purple-300 rounded-md border-2 p-1 ml-[160px]">Logout</button>
        </div>
    )
}
export default User;