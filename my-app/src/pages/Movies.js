
import React from "react";
import "../styles.css"
import { FaThumbsUp, FaStar } from "react-icons/fa"; // Icons for like and rating
import moviesection from "./moviesection.avif";
import moviesection6 from "./moviesection6.avif";
import moviesection5 from "./moviesection5.avif";
import moviesection4 from "./moviesection4.avif";
import moviesection3 from "./moviesection3.avif";

const movies = [
  {
    id: 1,
    title: "L2: Empuraan",
    genre: "Action/Crime/Thriller",
    likes: "428.2K",
    image: moviesection,
    promoted: true,
  },
  {
    id: 2,
    title: "Sikandar",
    genre: "Action/Drama",
    likes: "318.9K",
    image: moviesection6,
  },
  {
    id: 3,
    title: "Court: State vs A Nobody",
    genre: "Drama/Thriller",
    rating: "9.5/10",
    votes: "38.2K",
    image: moviesection5,
  },
  {
    id: 4,
    title: "Veera Dheera Sooran",
    genre: "Action/Thriller",
    likes: "31.8K",
    image: moviesection4,
  },
  {
    id: 5,
    title: "Snow White",
    genre: "Adventure/Drama/Family/Musical",
    rating: "7/10",
    votes: "819",
    image: moviesection3,
  },
];

function Movies() {
  return (
    <div className="movies-section">
      <div className="movies-header">
        <h2> Movies</h2>
      </div>
      
      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="movie-image">
              <img src={movie.image} alt={movie.title} />
              {movie.promoted && <span className="promoted-badge">PROMOTED</span>}
            </div>
            <div className="movie-info">
              {movie.likes ? (
                <p className="likes"><FaThumbsUp /> {movie.likes} Likes</p>
              ) : (
                <p className="rating"><FaStar className="star-icon" /> {movie.rating} {movie.votes} Votes</p>
              )}
              <h3>{movie.title}</h3>
              <p className="genre">{movie.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
