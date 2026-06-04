import React, { useState, useContext} from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { FaFilm, FaSearch, FaUser, FaHome, FaHeart, FaGlobe ,FaSignOutAlt} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import languageContext from './../context/languageContext';


import LoginModal from "./Login";

const AppNavbar = () => {
  const {language,isRTL,changeLang} = useContext(languageContext)
  const watchlistItems = useSelector((state) => state.watchlist.watchlistItems);
  const { t, i18n } = useTranslation();


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // State for Login Modal
  const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = (username) => {
        setUser({ name: username }); 
    };

    const handleLogout = () => {
        setUser(null); 
    };
  
  const scrollToMovies = () => {
    const moviesSection = document.getElementById("movies-section");
    if (moviesSection) {
      moviesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" className="custom-navbar" style={{ backgroundColor: "#001F3F" }}>
      <Container> 
        <Navbar.Brand as={Link} to="/" className="text-danger fw-bold d-flex align-items-center">
          {t("app")}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between align-items-center">
       
          <Nav className="mx-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/" className="text-white fw-bold d-flex align-items-center">
              <FaHome className="me-2" /> {t("home")}
            </Nav.Link>
            <Nav.Link as={Link} to="/" onClick={scrollToMovies} className="text-white fw-bold d-flex align-items-center" style={{ cursor: "pointer" }}>
              <FaFilm className="me-2" /> {t("movies")}
            </Nav.Link>
            <Nav.Link as={Link} to="/watchlist" className="text-white fw-bold d-flex align-items-center position-relative">
              <FaHeart className="me-2" /> {t("watchlist")}
              {watchlistItems.length > 0 && (
                <span className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-danger">
                  {watchlistItems.length}
                </span>
              )}
            </Nav.Link>
          </Nav>

  
          <Nav className="d-flex align-items-center">
            <Nav.Link as={Link} to="/search" className="text-white fw-bold d-flex align-items-center">
              <FaSearch className="me-2" /> {t("search")}
            </Nav.Link>

            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-language" className="d-flex align-items-center">
                <FaGlobe className="me-2" /> {language === "en" ? "English" : language === "fr" ? "Français" : language === "ar" ? "العربية" : "中文"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLang("en")}>🇬🇧 English</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLang("fr")}>🇫🇷 Français</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLang("ar")}>🇦🇪 العربية</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLang("zh")}>🇨🇳 中文</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>
          <Nav className="d-flex align-items-center">
            {user ? (
              <div className="d-flex align-items-center">
                <span className="welcome-message">Welcome, {user.name}</span>
                <button onClick={handleLogout} className="auth-btn">
                  <FaSignOutAlt className="me-2" /> LOG-OUT
                </button>
              </div>
            ) : (
              <button onClick={() => setShowLogin(true)} className="auth-btn">
                <FaUser className="me-2" /> LOG-IN
              </button>
            )}

          </Nav>

        </Navbar.Collapse>
        
      </Container>
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} onLogin={handleLogin} />
    </Navbar>
  );
};

export default AppNavbar;
