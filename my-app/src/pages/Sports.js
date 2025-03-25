
import React from "react";
import "../styles.css"
import { FaThumbsUp, FaStar } from "react-icons/fa"; // Icons for like and rating
import sports1 from "./sports1.avif";
import sports2 from "./sports2.avif";
import sports3 from "./sports3.avif";
import sports4 from "./sports4.avif";
import sports5 from "./sports5.avif";

const movies = [
  {
    id: 1,
    title: "BRAZIL LEGEND vs INDIA ALL STARS",
    likes: "428.2K",
    image: sports1,
    promoted: true,
  },
  {
    id: 2,
    title: "RED BULL MOTO JAM 2025",
    likes: "318.9K",
    image: sports2,
  },
  {
    id: 3,
    title: "THE SISTRA RUN",
    rating: "9.5/10",
    votes: "38.2K",
    image: sports3,
  },
  {
    id: 4,
    title: "MUMBAI INDIANS vs CHENNAI SUPER KINGS",
    likes: "31.8K",
    image: sports4,
  },
  {
    id: 5,
    title: "RAJASTAN ROYAL VS ROYAL RCB",
    rating: "7/10",
    votes: "819",
    image: sports5,
  },
];

function Sports() {
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

export default Sports;
