import React from "react";
import { useState } from 'react';

const Home = () => {
    const [movies, pegaMovieInput] = useState([]);

    const submitUserinput = event => {
        pegaMovieInput(event.target.value)
    }

    const getNoBackend = async () => {
        //event.preventDefault();
        const search = movies;

        const response = await fetch(`http://localhost:1234/${search}`)
        const data = await response.json()

        pegaMovieInput(data);
    }

    return (
        <>
            <section>
                <div className="inittext">
                    <h3>Search synopsis</h3>
                    <p>Search for movies and see synopses</p>
                </div>
                <div className="search">
                    <input onChange={submitUserinput} placeholder="Search" className="inpstyle" type='text' />
                    <button onClick={getNoBackend} >Search</button>
                    <button>Reset</button>
                    {/* <button><input type="reset"/></button> */}
                </div >
            </section>
            <section>
                <div className="movie">
                    <div className="moviedescr">
                        <h3>{movies.Title}</h3>
                        {
                            movies.length <= 18
                                ? <p>In the search bar above you can put the name of a movie <br />
                                    to search and see some infomations of this film <br />
                                    as synopsis, cast, evaluation and a poster... <br />
                                    You can see the example of a poster next to.
                                </p>
                                : <p className="mvsinopse" >{movies.Plot}</p>
                        }

                        {
                            movies.length <= 18
                                ? <p> </p>
                                : <p>Actors: {movies.Actors}</p>
                        }

                        {
                            movies.length <= 18
                                ? <p> </p>
                                : <p>Critic of <strong>{movies.Ratings[1].Source}</strong> with <strong>{movies.Ratings[1].Value}</strong> approval </p>
                        }

                        {
                            movies.length <= 18
                                ? <p> </p>
                                : <button className="btstyle" >Favoritar</button>
                        }

                    </div>
                    {
                        movies.length <= 18
                            ? <img className="poster" alt="Movie Poster" src="poster.jpg" />
                            : <img className="poster" alt="Movie Poster" src={movies.Poster} />
                    }
                </div>
            </section>
        </>
    );
}


export default Home;