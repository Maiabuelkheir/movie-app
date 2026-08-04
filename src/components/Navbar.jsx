import React, { useState, useContext, useEffect, useRef } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { FaFilm, FaSearch, FaUser, FaHome, FaHeart, FaGlobe ,FaSignOutAlt} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import languageContext from './../context/languageContext';


import LoginModal from "./Login";

const AppNavbar = () => {
  const {language,isRTL,changeLang} = useContext(languageContext)
  const watchlistItems = useSelector((state) => state.watchlist.watchlistItems);
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  // Close menu when route changes
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  // Close menu when clicking outside navbar on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [expanded]);

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
    <Navbar ref={navbarRef} expanded={expanded} onToggle={handleToggle} expand="lg" className="custom-navbar" style={{ backgroundColor: "#001F3F" }}>
      <Container> 
        <Navbar.Brand as={Link} to="/" className="text-danger fw-bold d-flex align-items-center" onClick={() => setExpanded(false)}>
          {t("app")}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-column flex-lg-row justify-content-between align-items-stretch align-items-lg-center">

          <Nav className="nav-main flex-column flex-lg-row align-items-start align-items-lg-center w-100 w-lg-auto mb-3 mb-lg-0">
            <Nav.Link as={Link} to="/" className="text-white fw-bold d-flex align-items-center nav-link-custom" onClick={() => setExpanded(false)}>
              <FaHome className="me-2" /> {t("home")}
            </Nav.Link>
            <Nav.Link as={Link} to="/" onClick={() => { scrollToMovies(); setExpanded(false); }} className="text-white fw-bold d-flex align-items-center nav-link-custom" style={{ cursor: "pointer" }}>
              <FaFilm className="me-2" /> {t("movies")}
            </Nav.Link>
            <Nav.Link as={Link} to="/watchlist" className="text-white fw-bold d-flex align-items-center position-relative nav-link-custom" onClick={() => setExpanded(false)}>
              <FaHeart className="me-2" /> {t("watchlist")}
              {watchlistItems.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger nav-badge">
                  {watchlistItems.length}
                </span>
              )}
            </Nav.Link>
          </Nav>

          <Nav className="nav-actions flex-column flex-lg-row align-items-start align-items-lg-center w-100 w-lg-auto gap-2 gap-lg-3">
            <Nav.Link as={Link} to="/search" className="text-white fw-bold d-flex align-items-center nav-link-custom" onClick={() => setExpanded(false)}>
              <FaSearch className="me-2" /> {t("search")}
            </Nav.Link>

            <Dropdown className="nav-dropdown">
              <Dropdown.Toggle variant="light" id="dropdown-language" className="d-flex align-items-center language-toggle">
                <FaGlobe className="me-2" /> {language === "en" ? "English" : language === "fr" ? "Français" : language === "ar" ? "العربية" : "中文"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => { changeLang("en"); setExpanded(false); }}>🇬🇧 English</Dropdown.Item>
                <Dropdown.Item onClick={() => { changeLang("fr"); setExpanded(false); }}>🇫🇷 Français</Dropdown.Item>
                <Dropdown.Item onClick={() => { changeLang("ar"); setExpanded(false); }}>🇦🇪 العربية</Dropdown.Item>
                <Dropdown.Item onClick={() => { changeLang("zh"); setExpanded(false); }}>🇨🇳 中文</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="auth-group d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 gap-lg-2 w-100 w-lg-auto">
              {user ? (
                <>
                  <span className="welcome-message text-white">{t("welcome")}, {user.name}</span>
                  <button onClick={() => {handleLogout(); setExpanded(false);}} className="auth-btn btn btn-sm btn-outline-light">
                    <FaSignOutAlt className="me-2" /> {t("logout")}
                  </button>
                </>
              ) : (
                <button onClick={() => {setShowLogin(true); setExpanded(false);}} className="auth-btn btn btn-sm btn-outline-light">
                  <FaUser className="me-2" /> {t("login")}
                </button>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} onLogin={handleLogin} />
    </Navbar>
  );
};

export default AppNavbar;
