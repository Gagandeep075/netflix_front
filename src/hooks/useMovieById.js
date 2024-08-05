import React , {useEffect} from 'react'
import { getTrailerMovie } from '../redux/movieSlice';
import {options} from '../utils/costants';
import { useDispatch } from 'react-redux';
import axios from 'axios';


const useMovieById = async (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
   const getMovieById = async () => {
    try {
      const res = await axios.get(`http://api.themoviedb.org/3/movie/${movieId}/videos`, options);

      console.log(res.data.results);
      const trailer = res?.data.results?.filter((item) => {
        return item.type === "Trailer";
      })
      dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results [0]));
    } catch (error) {
      console.log(error);
    }
   }
   getMovieById();
 },[])
}

export default useMovieById