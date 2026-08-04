import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromwatchlist, clearwatchlist } from "../store/slices/watchlist";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Watchlist() {
  const watchlistItems = useSelector((state) => state.watchlist.watchlistItems);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="container mt-5">
      <h2 className="section-title">{t("watchList")}</h2>

      {watchlistItems.length > 0 ? (
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3 justify-content-center mt-4">
          {watchlistItems.map((movie) => (
            <div key={movie.id} className="col mb-4">
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
                    onClick={() => dispatch(removeFromwatchlist(movie.id))}
                  >
                    <i
                      className="bi bi-heart-fill"
                      style={{ color: "#FF6347" }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-5">
          <i className="bi bi-heart" style={{ fontSize: "3rem", color: "#FF6347", opacity: 0.5 }}></i>
          <h4 className="text-white mt-3">{t("empty")}</h4>
          <p className="text-muted">Add movies to your watchlist to see them here</p>
        </div>
      )}

      {watchlistItems.length > 0 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(clearwatchlist())}
          >
            {t("clear")}
          </button>
        </div>
      )}
    </div>
  );
}
