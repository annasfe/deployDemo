import React from "react";
import Card from "./Card";
import "./MovieGrid.css";

export default function MovieGrid({ movies, onFavorite, onDelete }) {

  return (
    <div id="container-grid">
      <div id="grid">
        {movies
          .sort((a, b) => a.year - b.year)
          .map(movie => (
            <div key={movie.id}>
              <Card movie={movie} onDelete={onDelete} onFavorite={onFavorite} />
            </div>
          ))}
      </div>
    </div>
  );
}
