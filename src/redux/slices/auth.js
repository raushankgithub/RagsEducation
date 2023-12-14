import {authApi} from '../../mocks/auth'
import {Slice, createSlice} from "@reduxjs/toolkit";
const initialState = {
    user:{},
}


const slice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        getUser(state,action){
            let data = {...action.payload.data}
            console.log(data)
         state.user = data
        },
        updateUser(state,action){
            let data = action.payload.data
        state.user = {...state.user, ...data}
        },
        deleteUser(state,action){
         let data = action.payload.data;
         state.user = {}
        },
        logoutUser(state,action){
            state.user = {}
           },

    }

});

export const {reducer} = slice

export const getUser = () => async (dispatch) =>{
    const result = await authApi.getUser();
    if(result){
        await dispatch(slice.actions.getUser(result))
        return true
    }
    return false
}

export const updateUser = (data,id)=> async (dispatch) =>{
    try{
    console.log(data)
    const result = await authApi.updateUser(data,id);
    console.log(result)
    if(result){
        await dispatch(slice.actions.updateUser(result))
        return true
    }
    return false
    }
    catch(error){
       console('error show');
    }
    
}

export const deleteUser = (id)=> async (dispatch) =>{
    const result = await authApi.deleteUser(id);
    if(result){
        await dispatch(slice.actions.deleteUser(result))
        return true
    }
    return false
    
}

export const register = (data)=> async (dispatch) =>{
    try{
    const result = await authApi.register(data);
    if(result)
        return result
    }
    catch(error){

    }
    
}
export const login = (data) => async (dispatch) =>{
    try{
        const result = await authApi.login(data);
        console.log("slice result",result);
        if(result)
            return result;
        return false
    }
    catch(error){

    }
    
}

export const logoutUser = ()=> async (dispatch) =>{
    
        await dispatch(slice.actions.logoutUser())
        return true;
    
}



export default slice;
