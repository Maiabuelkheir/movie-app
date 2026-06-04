import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      app:"MovieApp",
      home: "HOME",
      app:"MovieApp",
      movies: "MOVIES",
      watchlist: "WATCHLIST",
      search: "SEARCH",
      login: "LOG-IN",
      logout: "LOG-OUT",
      language: "EN",
      "welcome": "Welcome To Our",
      "appName": "Movie App",
      "description": "Step into the world of cinema like never before! ...",
      "startJourney": "Start Your Journey",
      "watchList": "Your Watch List",
      "empty":"Your watchlist is empty",
      "remove":"Remove",
      "clear":"Clear",
      "movieslist":"Movies List",
      "MostViewed":"Most Viewed",
      "search":"search your movies here" ,
      "Recommendations":"Recommendations",
      "Reviews":"Reviews",

    },
  },
  es: {
    translation: {
      app:"películas",
      home: "INICIO",
      movies: "PELÍCULAS",
      watchlist: "LISTA DE SEGUIMIENTO",
      search: "BUSCAR",
      login: "INICIAR SESIÓN",
      logout: "CERRAR SESIÓN",
      language: "ES",
      "welcome": "Bienvenido a nuestro",
      "appName": "Aplicación de Películas",
      "description": "¡Adéntrate en el mundo del cine como nunca antes! ...",
      "startJourney": "Comienza tu Viaje",
      "watchList": "Tu Lista de Seguimiento",
      "empty":"Tu lista de seguimiento está vacía",
      "remove":"eliminar",
      "clear":"claro",
      "movieslist":"Lista de Películas",
      "MostViewed":"Más vistos",
      "search":"busca tus películas",
      "Recommendations":"Recomendaciones",
      "Reviews":"Reseñas",

    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // اللغة الافتراضية
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
