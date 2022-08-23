import {useState, useEffect} from 'react';
import './App.css';
import './search.svg'
import Qwert from './Qwert'

//2326d86c
const API_URL = 'http://www.omdbapi.com?apikey=2326d86c';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchterm] =useState();
const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`)//call the api
  const data = await response.json();//gets data after response from api

  setMovies(data.Search)
}

useEffect(()=>{
  searchMovies('Spiderman')
}, []);
  return (
    <div className='app'>
       <h1>movies</h1>
       <div className='search'>
        <input placeholder="search for movies"
               value={searchTerm}
               onChange={(e)=>setSearchterm(e.target.value)}
        />
        <img 
         src=""
         alt="search" 
         onClick={() => searchMovies(searchTerm)}     
        />
       </div>
   {
    movies?.length > 0 
    ? (
      <div className='container'>
       {movies.map((movie) => (
        <Qwert movie={movie} />
       ))}
        </div>
    ) : (
      <div className='empty'>
        <h2>No movies found</h2>
      </div>
    )
   }
   
       </div>
  );
}

export default App;
