import { useEffect, useState, useContext } from "react";
import axios from "axios";
import img from '../assets/react.svg';
import { t } from 'i18next';
import languageContext from "../context/languageContext";

const MovieReviews = ({ movieId }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const {language,isRTL,changeLang} = useContext(languageContext)

    const API_KEY = import.meta.env.VITE_API_KEY;
    
    useEffect(() => {
        axios
          .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
          .then((response) => setReviews(response.data.results))
          .catch((error) => console.error("Error fetching reviews:", error))
          .finally(() => setLoading(false));
    }, [movieId,language]);
    console.log(reviews);

    if (loading) return <p>Loading reviews...</p>;
    if (reviews.length === 0) return <p className="no-review">No reviews available.</p>;

    return (
        <div className="reviews-section">
    <h2>{t("Reviews")}</h2>
    <ul>
        {reviews.map((review) => (
            <li key={review.id} className="review">
                <img 
                    src={review.author_details.avatar_path
                        ? `https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`
                        : img} 
                    alt={review.author} 
                    className="review-avatar" 
                />
                <div className="review-content">
                    <strong className="review-author">{review.author}:</strong>
                    <p>{review.content.length > 300 ? review.content.substring(0, 300) + "..." : review.content}</p>
                </div>
            </li>
        ))}
    </ul>
</div>
    );
};

export default MovieReviews;
