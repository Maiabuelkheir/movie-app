import React from 'react'
import HeroSection from "../components/HeroSection";
import MostViewed from "../components/MostViewed";
import MoviesList from "../components/MoviesList";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MostViewed />
      <div id="movies-section">
        <MoviesList />
      </div>
    </div>
  );
}
