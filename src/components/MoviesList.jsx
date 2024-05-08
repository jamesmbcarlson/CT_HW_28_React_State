/* 
  James Carlson
  Coding Temple - SE FT-144
  Frontend, Module 11 Lesson 2 Assignment: React State and Props
  2. Enhancing Functional Components with React Hooks
*/

import React, {useState} from 'react'
import styles from './MoviesList.module.css';

function MoviesList() {
    const [movies, setMovies] = useState([
        { title: "Avengers: Endgame", description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.", 
            showDescription: false, genre: "Superhero"}, 
        { title: "Avengers: Infinity War", description: "Now that Earth has put its mark on the universe through the Avengers, all superheroes, including ones from other parts of the galaxy, must join forces to stop the powerful Thanos from taking all the infinity stones and destroying half the universe.", 
            showDescription: false, genre: "Superhero"}, 
        { title: "The Tree of Life", description: "The impressionistic story of a Texas family in the 1950s. The film follows the life journey of the eldest son, Jack, through the innocence of childhood to his disillusioned adult years as he tries to reconcile a complicated relationship with his father.", 
            showDescription: false, genre: "Arthouse"}, 
        { title: "Up", description: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.", 
            showDescription: false, genre: "Adventure"},
        { title: "Little Miss Sunshine", description: "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.", 
            showDescription: false, genre: "Comedy/Drama"},
        { title: "Back to the Future", description: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.", 
            showDescription: false, genre: "Adventure"},
        { title: "Serenity", description: "The crew of the ship Serenity try to evade an assassin sent to recapture telepath River.", 
            showDescription: false, genre: "Adventure"},
        { title: "28 Days Later", description: "Four weeks after a mysterious, incurable virus spreads throughout the UK, a handful of survivors try to find sanctuary.", 
            showDescription: false, genre: "Horror"}]);
    const [filter, setFilter] = useState("all");

    // toggle descriptions for each movie when button pressed
    const toggleDescription = (index) => {
        const updatedList = [...movies];
        updatedList[index].showDescription = !updatedList[index].showDescription;
        setMovies(updatedList);
    }

    // remove movie when corresponding remove button pressed
    const removeMovie = (index) => {
        const updatedList = [...movies];
        updatedList.splice(index, 1);
        setMovies(updatedList);
    }

  return (
    <div className={styles.movies}>
      <h5>// 2. Enhancing Functional Components with React Hooks</h5>
      <h1>Favorite Movies</h1>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('Superhero')}>Superhero</button>
      <button onClick={() => setFilter('Arthouse')}>Arthouse</button>
      <button onClick={() => setFilter('Adventure')}>Adventure</button>
      <button onClick={() => setFilter('Comedy/Drama')}>Comedy/Drama</button>
      <button onClick={() => setFilter('Horror')}>Horror</button>
      <ul>
        {movies.map((movie, index) => (
            <>
            {(filter === 'all' || filter === movie.genre) && 
                <li key={index}><h4>{movie.title}</h4>
                    <ul>
                        <li className={styles.toggleBtn}>Description: <button onClick={() => toggleDescription(index)}> {(movie.showDescription) ? <h6>-</h6> : <h6>+</h6>} </button>
                        <p>{(movie.showDescription) && movie.description}</p></li>
                        <li>Genre: {movie.genre}</li>
                        <li className={styles.removeBtn}><button onClick={() => removeMovie(index)}>REMOVE</button></li>
                    </ul>
                </li>}
            </>
        ))}
      </ul>
      {(movies.length === 0) && <h4>Why you hatin' my movies??</h4>}
    </div>
  )
}

export default MoviesList
