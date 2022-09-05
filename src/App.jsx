
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MoviesDetail from './Components/MoviesDetail';

import Navbar from './Components/Navbar';
import MoviesPage from './Pages/MoviesPage';
import SearchPage from './Pages/SearchPage';
import SeriesPage from './Pages/SeriesPage';
import TrendingPage from './Pages/TrendingPage';


function App() {


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path='/' element={<TrendingPage />}/>
        <Route path='/:id' element={<MoviesDetail />}/>
        <Route path='/movies' element={<MoviesPage />}/>
        <Route path='/series' element={<SeriesPage />}/>
        <Route path='/search' element={<SearchPage />}/>
      </Routes>
    </div>
  )
}

export default App
