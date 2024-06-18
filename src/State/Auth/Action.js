// import axios from "axios"
import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig"
import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGOUT } from "./ActionType";

const jwt = localStorage.getItem("jwt");

const registerRequest = ()=> ({type:REGISTER_REQUEST})
const registerSucces = (user)=> ({type:REGISTER_SUCCESS, payload:user})
const registerFailure = (error)=> ({type:REGISTER_FAILURE, payload: error})

export const register = (userData) => async (dispatch)=>{

    dispatch(registerRequest())

    try{
        const response = await axios.post(`${API_BASE_URL}/auth/register`, userData) 
        const user = response.data;

        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        console.log("user ", user)
        dispatch(registerSucces(user.jwt))


    }catch ( error) {
        dispatch(registerFailure(error.message))

    }
}

const loginRequest = ()=> ({type:LOGIN_REQUEST})
const loginSucces = (user)=> ({type:LOGIN_SUCCESS, payload:user})
const loginFailure = (error)=> ({type:LOGIN_FAILURE, payload: error})

export const login = (userData) => async (dispatch)=>{

    dispatch(loginRequest())

    try{
        const response = await axios.post(`${API_BASE_URL}/auth/login`, userData) 
        const user = response.data;

        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        console.log("user ", user)
        dispatch(loginSucces(user.jwt))


    }catch ( error) {
        dispatch(loginFailure(error.message))

    }
}

const getUserRequest = ()=> ({type: GET_USER_REQUEST})
const getUserSucces = (user)=> ({type: GET_USER_SUCCESS, payload:user})
const getUserFailure = (error)=> ({type: GET_USER_FAILURE, payload: error})

export const getUser = (jwt) => async (dispatch)=>{

    dispatch(getUserRequest())

    try{
        const response = await axios.get(`${API_BASE_URL}/auth/me`, {
            headers : {
                "Authorization": `Bearer ${jwt}`
            }
        }) 

        const user = response.data;
        console.log("user ", user)
        dispatch(getUserSucces(user))


    }catch (error) {
        dispatch(getUserFailure(error.message))

    }
}

 export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT, payload:null})
    localStorage.clear();
 }