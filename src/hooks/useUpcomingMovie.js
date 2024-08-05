
import axios from "axios";
import { getUpcomingMovie } from "../redux/movieSlice";
import { Upcoming_Movie,options } from "../utils/costants";
import {useDispatch} from "react-redux";

const useUpcomingMovie = async () => {
    const dispatch = useDispatch();
 try {
    const res = await axios.get(Upcoming_Movie,options);
    dispatch(getUpcomingMovie(res.data.results));
 } catch (error) {
    
 }
}

export default useUpcomingMovie