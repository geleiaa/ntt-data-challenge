import React from "react";
import { useState } from 'react';
import Movie from "./Movie";

/*
    useEffect(() => {
            const getNoBackend = async () => {
                try {
                    const response = await fetch(`http://localhost:1234/${search}`)
                    const data = await response.json()

                    const loadedMovie = [];

                    for (let dt in data) {
                        loadedMovie.push({
                            title: dt.Title,
                            sinopse: dt.Plot,
                            elenco: dt.Actors,
                            poster: dt.Poster
                        })
                    }

                    console.log('FOI???', loadedMovie);

                } catch (err) {
                    console.log('FRONT-ERRO', err);
                }

                getNoBackend();
            }
        }, [])
*/

const Home = () => {
    const [textInput, pegaUserInput] = useState([]);

    const submitUserinput = event => {
        pegaUserInput(event.target.value)
    }

    const getNoBackend = async event => {
        event.preventDefault();
        console.log(textInput);
        const search = textInput;
        try {
            const response = await fetch(`http://localhost:1234/${search}`)
            const data = await response.json()
            console.log('DATA', data);

            const loadedMovie = [];

            for (let dt in data) {
                loadedMovie.push({
                    title: dt.Title,
                    sinopse: dt.Plot,
                    elenco: dt.Actors,
                    poster: dt.Poster
                })
            }

            console.log('LOADED', loadedMovie);
            pegaUserInput(loadedMovie);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <section>
                <div>
                    <h3>Seach Sinopse</h3>
                    <p>Qualquer texto só pra testar</p>
                </div>
                <div className="search">
                    <input onChange={submitUserinput} placeholder="Search" className="inpstyle" type='text' />
                    <button className="btstyle" onClick={getNoBackend} >Submit</button>
                    <button className="btstyle" >Reset</button>
                </div >
            </section>
            <section>
                <Movie movies={textInput} />
            </section>
        </>
    );
}


export default Home;