import React, { useState } from 'react'
import Header from './Header';
import axios from "axios";
import { API_END_POINT } from "../utils/costants";
import toast from "react-hot-toast";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { setUser, isLoading, setLoading } from '../redux/useSlice';
import Loading from './loading';
const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((store)=> store.app.isLoading);

    const LoginHandler = () =>{
        setIsLogin(!isLogin);
    }
    const getInputData = async (e) =>{
        e.preventDefault();
        dispatch(setLoading(true))
        if(isLogin){
            //login
            const user = { Email,Password}
            try {
                console.log(`${API_END_POINT}/login`);

                const res = await axios.post( `${API_END_POINT}/login`, user,{header:{
                    'Content-Type': 'application/json'
                },
                withCredentials:true
                });
                console.log(res.data.user)
                console.log(res)
                dispatch(setUser(res.data.user))
                navigate("/browse");
                
                 if(res.data.success){
                    toast.success(res.data.message);
                 }
            } catch (error) {
                toast.error(error.response.data.message);
                console.log(`${error}`);
            }
            finally{
                dispatch(setLoading(false))
            }
        }
        else{
            //register

            console.log(`${API_END_POINT}/register`);
            const user = {fullName, Email,Password}
            try {

                const res = await axios.post( `${API_END_POINT}/register`, user,{header:{
                    'Content-Type': 'application/json'
                },
                withCredentials:true
                });
                
                 if(res.data.success){
                    setIsLogin(true)
                    toast.success(res.data.message);
                 }
                 
            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);
            }
            finally{
                dispatch(setLoading(false))
            }
           
        }
        setFullName("");
        setEmail("");
        setPassword("");
    }
    return (
        <div > 
            <Header />
            <div className='absolute w-full border-solid h-full bg-black'>
                <img src='https://xxboxnews.blob.core.windows.net/prod/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png' className='sm:h-500' alt="netflix-cover" />
            </div>
            <form onSubmit={getInputData} className='flex flex-col lg:w-3/12 md:4/12 my-36  p-12 left-0 right-0 mx-auto items-center justify-center absolute bg-black rounded-md opacity-90 sm:w-7/12'>
            <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin? "Login" : "Sign Up"}</h1>
<div className='flex flex-col'>
    { !isLogin && <input type='text' value={fullName} onChange={(e)=>setFullName(e.target.value)} placeholder='Full Name' className='outline-none p-3 my-2 rounded-md bg-gray-800 text-white'/>
    }
    
    <input type='email' value={Email} placeholder='Email'onChange={(e)=>setEmail(e.target.value)} className='outline-none p-3 my-2 rounded-md bg-gray-800 text-white' />
    
    <input type='password' value={Password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} className='outline-none p-3 my-2 rounded-md bg-gray-800 text-white'/>
    <button className='bg-red-600 mt-6 p-3 text-white rounded-md font-medium opacity-100'> {isLoading ? <Loading/> : (isLogin ? "Login" : "Sign Up")}
</button>
        </div>
        <p className='text-white mt-2'>{isLogin? "New to Netflix?" : "Already have an account?"}</p>
        <span onClick={LoginHandler} className='ml-1 text-blue-300 font-medium cursor-pointer' >{isLogin? "Sign Up": "Login"}</span>
            </form>
        </div>
    )
}

export default Login