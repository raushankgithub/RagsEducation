import axios from "axios";


class AuthApi{

    async getUser(){
      try{
       const response = await axios.get(`${process.env.REACT_APP_HOST}/userapp/user/me`,{
        method: "get",
        headers: { 
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
      }); 
       if(response.data.status==='SUCCESS')
       return response.data;
       else
        return false;
      }
      catch(error){
        console.log(error?.response?.data);
        return error?.response?.data
      }
    } 

    async updateUser(data,id){
      try{
      const response = await axios.put(`${process.env.REACT_APP_HOST}/userapp/user/update/${id}`,data,{
        method: "put",
        headers: { 
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
      });
        if(response.data.status==='SUCCESS')
        return response.data;
        else
        return false;
    }
    catch(error){
      console.log(error);
      console.log(error?.response?.data);
       return error?.response?.data
    }
        
         
    } 

    async deleteUser(id){
      const response = await axios.delete(`${process.env.REACT_APP_HOST}/userapp/user/delete/${id}`,{
        method: "delete",
        headers: { 
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
      });
        if(response.data.status==='SUCCESS')
        return response.data;
        else
         return false;
    } 

 
   async register(data){
  
     try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}/userapp/auth/register`,data);
      console.log(response);
    if(response.data.status==='SUCCESS')
    return response;
    else
     return false;
       
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data);
      return error?.response?.data
    }
   } 

   async login(data){
    try{
      const response = await axios.post(`${process.env.REACT_APP_HOST}/userapp/auth/login`,data);
      console.log("response",response);
      if(response.data.status==='SUCCESS')
      return response;
      else
       return false;
    }
    catch(error){
         console.log(error)
    }
   } 

   

}

export const authApi = new AuthApi();