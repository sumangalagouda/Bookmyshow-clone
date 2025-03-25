
import React from "react";
import "../styles.css"
import { FaThumbsUp, FaStar } from "react-icons/fa"; // Icons for like and rating
import eventsection1 from "./eventsection1.avif";
import eventsection2 from "./eventsection2.avif";
import eventsection3 from "./eventsection3.avif";
import eventsection4 from "./eventsection4.avif";
import eventsection5 from "./eventsection5.avif";

const movies = [
  {
    id: 1,
    title: "Karthik live at GYLT!",
    genre: "GYLT:Benagaluru",
    likes: "428.2K",
    image: eventsection1,
    promoted: true,
  },
  {
    id: 2,
    title: "JP NAGAR COMEDY",
    genre: "klaworkz barista",
    likes: "318.9K",
    image: eventsection2,
  },
  {
    id: 3,
    title: "Guns N' Roses:India 2025",
    genre: "Mahalaxmi",
    rating: "9.5/10",
    votes: "38.2K",
    image: eventsection3,
  },
  {
    id: 4,
    title: "Gaurav Gupta Live",
    genre: "Fan park,phoenxi mall",
    likes: "31.8K",
    image: eventsection4,
  },
  {
    id: 5,
    title: "Papon Live @AAB Bohagi",
    genre: "Phoenix market city",
    rating: "7/10",
    votes: "819",
    image: eventsection5,
  },
];

function Events() {
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

export default Events;
