import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { t } from 'i18next';
import languageContext from '../context/languageContext';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;


const Recommendations = ({ movieId }) => {
  const {language,isRTL,changeLang} = useContext(languageContext)
  console.log(language)
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}&language=${language}`)
      .then((response) => setRecommendations(response.data.results))
      .catch((error) => console.error("Error fetching recommendations:", error));
  }, [movieId, language]);

  if (recommendations.length === 0) {
    return <p>No recommendations available.</p>;
  }

  return (
    <div className="recommendations">
      <h2>{t("Recommendations")}</h2>
      <Swiper
        slidesPerView={6}  
        spaceBetween={5}  
        navigation={true} 
        modules={[Navigation]}
        className="movie-slider"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          992: { slidesPerView: 3, spaceBetween: 10 },
          1200: { slidesPerView: 4, spaceBetween: 10 },
          1400: { slidesPerView: 5, spaceBetween: 10 },
          1650: { slidesPerView: 6, spaceBetween: 10 },
        }}
      >
        {recommendations.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`} className="recommendation-item">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="recommendation-img"
              />
              <p>{movie.title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommendations;
