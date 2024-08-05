import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getTrailerMovie } from '../redux/movieSlice';
import { options } from '../utils/costants';
import useMovieById from '../hooks/useMovieById';

const VideoBackground = ({ movieId,bool }) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);
  const dispatch = useDispatch();


  useMovieById(movieId);
  console.log("video background is re-rendering");
  
  return (
    <div className='w-screen'>
      {trailerMovie && (
        <iframe
          className={`${bool ? "w-auto h-auto m-3 " : "w-screen aspect-video"}`}
          src={`https://www.youtube.com/embed/${trailerMovie.key}?mute=1&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
