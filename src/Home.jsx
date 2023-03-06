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
                    <h3>Buscar Sinopse</h3>
                    <p>Busque por filmes e veja as sinopses</p>
                </div>
                <div className="search">
                    <input onChange={submitUserinput} placeholder="Search" className="inpstyle" type='text' />
                    <button onClick={getNoBackend} >Search</button>
                    <button>Reset</button>
                </div >
            </section>
            <section>
                <div className="movie">
                    <div className="moviedescr">
                        <h3>{movies.Title}</h3>
                        {
                            movies.length <= 18
                                ? <p>Na barra de pesquisa acima você pode colocar o nome de um filme <br />
                                    para buscar e ver algumas infomações do filme como <br />
                                    sinopse, elenco, avaliação e um poster... <br />
                                    Como você pode ver num exemplo de sinopse abaixo e um poster ao lado<br />
                                </p>
                                : <p className="mvsinopse" >{movies.Plot}</p>
                        }

                        {
                            movies.length <= 18
                                ? <p> </p>
                                : <p>Elenco: {movies.Actors}</p>
                        }

                        {
                            movies.length <= 18
                                ? <p> </p>
                                : <p>Avaliação:
                                    {movies.Ratings.map(rt => rt.Source === 'Metacritic')}</p>
                        }

                        {
                            movies.length <= 18
                                ? <p> </p>
                                : <button className="btstyle" >Favorite</button>
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