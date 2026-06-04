import React from "react";
import "../css/notFound.css";
function NotFound() {
  return (
    <div className="not-found container d-flex flex-column align-items-center justify-content-center mt-5">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;