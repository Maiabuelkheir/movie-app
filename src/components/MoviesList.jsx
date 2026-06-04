import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import languageContext from './../context/languageContext';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();
  const {language,isRTL,changeLang} = useContext(languageContext)
  console.log(language)

  const moviesPerPage = 12;
  const totalPages = 5;

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = import.meta.env.VITE_BASE_URL;

    fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${currentPage}&language=${language}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, [currentPage,language]);

  return (
    <div className="movies-container">
      <h1 className="section-title" style={{ color: "#d10000" }}>
        {t("movies lsit")}
      </h1>
      <div className="row">
        {movies.slice(0, moviesPerPage).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default MoviesList;
