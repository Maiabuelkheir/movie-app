import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromwatchlist, clearwatchlist } from "../store/slices/watchlist";
import { useTranslation } from "react-i18next";

export default function Watchlist() {
  const watchlistItems = useSelector((state) => state.watchlist.watchlistItems);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="container mt-5">
      <h2 className="text-center text-white">{t("watchList")}</h2>

      {watchlistItems.length > 0 ? (
        <div className="row mt-4 justify-content-center">
          {watchlistItems.map((movie) => (
            <div key={movie.id} className="col-md-2 col-sm-4 col-6 mb-3">
              <div className="card bg-dark text-white h-100 d-flex flex-column">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body p-2 d-flex flex-column">
                  <h6 className="card-title text-center" style={{ fontSize: "0.9rem" }}>
                    {movie.title}
                  </h6>
                  <p className="card-text text-center mb-2" style={{ fontSize: "0.8rem" }}>
                    ⭐ {movie.vote_average.toFixed(1)}
                  </p>
                  <button
                    className="btn btn-danger btn-sm w-100 mt-auto"
                    onClick={() => dispatch(removeFromwatchlist(movie.id))}
                  >
                    {t("remove")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h4 className="text-center text-white mt-4">{t("empty")}</h4>
      )}

      {watchlistItems.length > 0 && (
        <div className="text-center mt-2">
          <button
            className="btn btn-warning btn-sm"
            onClick={() => dispatch(clearwatchlist())}
          >
            {t("clear")}
          </button>
        </div>
      )}
    </div>
  );
}
