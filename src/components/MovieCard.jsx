import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTowatchlist, removeFromwatchlist } from "../store/slices/watchlist";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const watchlistItems = useSelector((state) => state.watchlist.watchlistItems);
  const isInwatchlist = watchlistItems.some((item) => item.id === movie.id);

  return (
    <div className="col mb-4">
      <div className="movie-card position-relative">
        <Link to={`/movie/${movie.id}`} className="movie-link">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-image"
          />
        </Link>

        <div className="movie-info">
          <div className="movie-text">
            <span className="movie-title">{movie.title}</span>
            <span className="movie-date">{movie.release_date}</span>
          </div>

          <button
            type="button"
            className="watchlist-btn"
            onClick={() =>
              isInwatchlist
                ? dispatch(removeFromwatchlist(movie.id))
                : dispatch(addTowatchlist(movie))
            }
          >
            <i
              className={isInwatchlist ? "bi bi-heart-fill" : "bi bi-heart"}
              style={{ color: isInwatchlist ? "#FF6347" : "#FFFFFF" }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
