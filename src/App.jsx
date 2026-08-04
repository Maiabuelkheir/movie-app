import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home'
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails'
import SearchPage from './pages/SearchPage'
import NotFound from './pages/NotFound'
import Watchlist from "./components/watchlist";
import languageContext from './context/languageContext';

function WatchlistLayout() {
  return (
    <> 
      <Watchlist />
    </>
  );
}

function App() {
  const [language, setLanguage] = useState('en')
  const [isRTL, setIsRTL] = useState(false)
  const { i18n } = useTranslation();
  
  const changeLang = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setIsRTL(lang === "ar"); 
  };
  
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);
  
  return (
            <BrowserRouter>
              <languageContext.Provider value = {{language,isRTL,changeLang}}>
                <AppNavbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movie/:id" element={<MovieDetails />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/watchlist" element={<WatchlistLayout />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </languageContext.Provider>
            </BrowserRouter>
  );
}
export default App
