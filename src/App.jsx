/* 
  James Carlson
  Coding Temple - SE FT-144
  Frontend, Module 11 Lesson 2 Assignment: React State and Props
*/

import React from 'react';
import UserProfile from './components/UserProfile';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  return (
    <>
      <UserProfile/>
      <MoviesList/>
    </>
  )
}

export default App