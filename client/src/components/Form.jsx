import React, { useState } from "react";

export default function Form({ onAdd }) {
  let [newMovie, setNewMovie] = useState({
    title: "",
    img: "",
    year: 0,
    favorite: false,
  });

  const handleChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(newMovie);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="movie title"
        name="title"
        value={newMovie.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="year"
        name="year"
        value={newMovie.year}
        onChange={handleChange}
      />
      <input
        type="url"
        placeholder="img URL"
        name="img"
        value={newMovie.img}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">
        Add movie
      </button>
    </form>
  );
}
