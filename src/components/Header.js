import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import {useSelector, useDispatch} from "react-redux";
import store from '../redux/store';
import { API_END_POINT } from '../utils/costants';
import Axios from 'axios';
import { setUser,setLoading } from '../redux/useSlice';
import {useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';
import { CgProfile } from "react-icons/cg";

const Header = () => {
    const user = useSelector((store)=>store.app.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const toggle = useSelector((store)=>store.movie.toggle);  
    
    const isLoading = useSelector((store) => store.app.isLoading)
    const logoutHandler = async () =>{
        try {
            const res = await Axios.get(`${API_END_POINT}/logout`);
            if(res.data.success){
                toast.success(res.data.message);
            }
            console.log(res);
            dispatch(setUser(null));
            navigate("/");
            

        } catch (error) {
            
            console.log(error);
        }
    }

    const toggleHandler = () =>{
        dispatch(setToggle())
    }
    return (
        <div className=' absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black'> 
            <img className="lg:w-56 sm:w-20" src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='netflix-logo'/>
            { user && (<div className='flex items-center'>
                <CgProfile size="24px"  color='white'/>
                 <h1 className='lg:text-lg font-medium text-white sm:text-sm'> {user.fullName}</h1>
                <div className='ml-4'>
                <button onClick={logoutHandler} className='bg-red-800 rounded-md font-semibold hover:bg-white hover:text-red-700 transition-colors duration-500 text-white px-4 py-2 lg:text-lg sm:text-xs'>Logout</button>

                <button onClick={toggleHandler} className='bg-red-800 text-white px-4 py-2 ml-2 rounded-md  font-semibold hover:bg-white hover:text-red-700 transition-colors duration-500 sm:text-xs lg:text-lg'> {toggle ? "Home" : "Search Movie"} </button>
                </div>
            </div>
        )}
        </div>
            

    )
}

export default Header