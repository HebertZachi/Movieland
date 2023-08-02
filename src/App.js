import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=b406e07e';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("war");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;





































// const Person = (props) => {
//   return (
//     <>
//       <h1>{props.name}</h1>
//       <h2>Hello World!</h2>
//       <h3>Hello World!</h3>
//     </>
//   )
// }

// const App = () => {
//   return (
//     <div className="App">
//       <Person name={'john'} />
//     </div>
//   );
// }

// const App = () => {

//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     setCounter(100)
//   }, []);