import React, { useEffect } from 'react'
import Header from './Header'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import MainContainer from './MainCotainer'
import MovieContainer from './MovieContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovie from '../hooks/useUpcomingMovie'
import SearchMovie from './SearchMovie'
import { ClassNames } from '@emotion/react'


const Browse = () => {
    const user = useSelector((store)=>store.app.user);
    const toggle = useSelector(store=>store.movie.toggle);
    const navigate = useNavigate();

   
    // my custom hooks
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovie();

    useEffect(()=>{
        if(!user){
            navigate("/");
        }
       
    },[])

    console.log("browser is re rendering");
    
    return (
        <div> <Header/>
        <div>
            {
                toggle ? <SearchMovie /> :(
                    < div className='bg-black'>
                    <MainContainer />
                    <MovieContainer />
                    </div>
                )
            }
            
        </div>
        </div>
    )
}

export default Browse