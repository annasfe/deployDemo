import React, { useEffect, useState } from "react";
import "./App.css";
import MovieGrid from "./components/MovieGrid";
import Form from "./components/Form";
import Movies from "./Movies";

export default function App() {
  let [movies, setMovies] = useState([]);
  
  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => {
        // upon success, update tasks
        setMovies(data || []);
        console.log("Fetching movies: ", data)
      })
      .catch((error) => {
        // upon failure, show error message
      });
  }

  const addMovie = (movie) => {
    console.log("Add movie ");
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    };

    fetch("/api/movies/", options)
      .then((res) => res.json())
      .then((data) => {
        getMovies();
        //Food for thought: is this the best option?? 
        //or have the server send back the data with any post/put/delete request?
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateMovie = (id) => {
    console.log("Update movie ", id);
    //update favorites status
    let options = {
      method: "PUT",
    };
    fetch("/api/movies/" + id, options)
      .then((res) => res.json())
      .then((json) => {
        getMovies();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteMovie = (id) => {
    console.log("Delete movie ", id);
    //delete
    let options = {
      method: "DELETE",
    };
    fetch("/api/movies/" + id, options)
      .then((res) => res.json())
      .then((json) => {
        getMovies(); //or instead, if method returns all movies in data, setMovies(json)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <main>
        <div className="container">
          <h1>My Ghibli Movies Database</h1>
          {/* The form */}
          <Form onAdd={addMovie} />
          
          {/* The grid */}
          <MovieGrid
            movies={movies}
            onFavorite={updateMovie}
            onDelete={deleteMovie}
          />
        </div>
      </main>
    </div>
  );
}
