import React from "react";

export default function Card({ movie, onFavorite, onDelete }) {
  return (
    <div className="card">
      <img className="card-img-top" src={movie.img} alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <button className="btn" onClick={() => onFavorite(movie.id)}>
          {movie.favorite ? (
            <i className="material-icons">favorite</i>
          ) : (
            <i className="material-icons">favorite_border</i>
          )}
        </button>
        <button className="btn" onClick={() => onDelete(movie.id)}>
          <i className="material-icons">delete</i>
        </button>
      </div>
    </div>
  );
}
