import React from 'react';
import './App.css';
import FilterableMoviesList from './components/FilterableMoviesList/FilterableMoviesList';
import movies from './movies';

console.log(movies);

function App() {
  return (
      <div className="container">
        <h1>Film Listesi</h1>
        <div><FilterableMoviesList movies={movies}/></div>
    </div>
  );
}

export default App;
