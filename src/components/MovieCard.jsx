import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTowatchlist, removeFromwatchlist } from "../store/slices/watchlist";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const watchlistItems = useSelector((state) => state.watchlist.watchlistItems);
  const isInwatchlist = watchlistItems.some((item) => item.id === movie.id);

  return (
    <div className="col-md-2 mb-4 col-lg-2 col-sm-6">
      <div className="movie-card position-relative">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-image"
          />
        </Link>

        <div className="movie-info d-flex flex-column justify-content-between">
          <div>
            <span className="movie-title">{movie.title}</span>
            <span className="movie-date">{movie.release_date}</span>
          </div>
          <button
            className="btn position-absolute bottom-0 end-0 me-2 mb-2"
            onClick={() =>
              isInwatchlist
                ? dispatch(removeFromwatchlist(movie.id))
                : dispatch(addTowatchlist(movie))
            }
          >
            <i
              className="bi bi-heart-fill"
              style={{
                fontSize: "1.5rem",
                color: isInwatchlist ? "#FF6347" : "white",
              }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
