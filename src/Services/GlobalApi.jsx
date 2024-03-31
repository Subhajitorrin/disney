import axios from "axios";
const movieBaseUrl="https://api.themoviedb.org/3";
const apikey="7f803f6abb22fd06057fed554c09cf75"
const getTrending = axios.get(movieBaseUrl+"/trending/all/day?api_key="+apikey);
function getMoviesByGenresId(id){
    return axios.get(`${movieBaseUrl}/discover/movie?api_key=${apikey}&with_genres=${id}`);
}
export default{getTrending,getMoviesByGenresId}