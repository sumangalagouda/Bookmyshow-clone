import React from "react";
import "./RecommendedMovies.css"; // Add styles
import { FaThumbsUp, FaStar } from "react-icons/fa"; // Icons for like and rating
import evnt3 from "./evnt3.avif";
import evnt from "./evnt.avif";
import evnt2 from "./evnt2.avif";
import evnt4 from "./evnt4.avif";
import event3 from "./evnt3.avif";

const movies = [
  {
    id: 1,
    image: evnt3,
    promoted: true,
  },
  {
    id: 2,
    image: evnt,
  },
  {
    id: 3,
    image: evnt2,
  },
  {
    id: 4,
    image: evnt4,
  },
  {
    id: 5,
    image: event3,
  },
];

function RecommendedEvents() {
  return (
    <div className="movies-section">
      <div className="movies-header">
        <h2>Recommended Movies</h2>
        <a href="#" className="see-all">See All &gt;</a>
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
export default RecommendedEvents;
