import React from "react";
import { useState } from 'react';

const Home = () => {
    const [movies, pegaMovieInput] = useState([]);

    const submitUserinput = event => {
        pegaMovieInput(event.target.value)
    }

    const getNoBackend = async () => {
        //event.preventDefault();
        console.log(movies);
        const search = movies;

        const response = await fetch(`http://localhost:1234/${search}`)  //`http://www.omdbapi.com/?t=${search}&plot=full&apikey=b9450d8c`
        const data = await response.json()
        console.log('DATA', data, typeof(data))

        pegaMovieInput(data);
    }

    return (
        <>
            <section>
                <div>
                    <h3>Seach Sinopse</h3>
                    <p>Busque por filmes e veja as sinopses</p>
                </div>
                <div className="search">
                    <input onChange={submitUserinput} placeholder="Search" className="inpstyle" type='text' />
                    <button className="btstyle" onClick={getNoBackend} >Submit</button>
                    <button className="btstyle" >Reset</button>
                </div >
            </section>
            <section>
                <div className="movie">
                    <div className="moviedescr">
                        <h3>{movies.Title}</h3>
                        <p className="mvsinopse" >{movies.Plot}</p>
                        <p>Elenco: {movies.Actors}</p>
                        <button className="btstyle" >Favorite</button>
                    </div>
                    <img className="poster" alt="Movie Poster" src={movies.Poster} />
                </div>
            </section>
        </>
    );
}


export default Home;