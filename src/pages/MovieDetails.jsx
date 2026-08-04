import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import StarRating from "../components/Rating";
import Recommendations from "../components/Recommendations";
import MovieReviews from "../components/Reviews";
import "../css/MovieDetails.css";
import languageContext from './../context/languageContext';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { t } = useTranslation();
  const {language,isRTL,changeLang} = useContext(languageContext)
  console.log(language)


  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${language}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id, language]);
  // console.log(movie);

  if (!movie) return <p className="text-white text-center mt-5">{t("loading")}</p>;

  return (
    <>
    <div className="movie-container">
        <div className="poster-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="poster"
          />
        </div>

        <div className="details-container">
          <h1 className="title">{movie.title}</h1>
          <span className="date">{new Date(movie.release_date).toLocaleDateString('en-US',
             { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <StarRating rating={movie.vote_average} />
          <p className="overview"><strong>{t("overview")}:</strong> {movie.overview}</p>

          <div className="genres">
            <strong>{t("genres")}:</strong>
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre">{genre.name}</span>
            ))}
          </div>

            <div className="movie-info">
              <p><strong>{t("duration")}:</strong> {movie.runtime} min</p>
              <p><strong>{t("language")}:</strong> {movie.original_language.toUpperCase()}</p>
            </div>

          <div className="production">
            {movie.production_companies.slice(0, 2).map((company) => (
              company.logo_path ? (
                <img
                  key={company.id}
                  src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                  alt={company.name}
                  className="company-logo"
                />
              ) : (
                <span key={company.id} className="company-name">{company.name}</span>
              )
            ))}
          </div>

        
          {movie.homepage && (
            <a href={movie.homepage} className="website-btn" target="_blank" rel="noopener noreferrer">
              {t("website")}
            </a>
          )}
       </div>
    
  </div>
  <div class="hr-container">
    <hr/>
</div>

  <Recommendations movieId={id} />
  <div class="hr-container">
    <hr/>
</div>

  <MovieReviews movieId={movie.id} />
    </>
    

  );
}

export default MovieDetails;
