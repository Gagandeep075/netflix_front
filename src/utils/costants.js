
export const API_END_POINT = 'https://netflix-back-rcy9.onrender.com/api/v1/user'; // Corrected API endpoint

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjNjNDI1MzRiNWFiZmE1NzVlNWU4ODUwZWRjMmU2YSIsInN1YiI6IjY2MmI1ZDhkZThkMGI0MDExZTExNWIzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lcLfrdP8_WY-ky2Y-MrXV__5Bg7MTuAQIfcpbJa8b84'
    }
  };

  export const Now_Playing_Movie = " https://api.themoviedb.org/3/movie/now_playing";
  export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
  export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
  export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";

  export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";
  export const Banner_Url = "https://image.tmdb.org/t/p/w500";