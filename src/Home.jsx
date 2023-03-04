import React from "react";
import { useState } from 'react';


const Home = (props) => {
    const [textInput, pegaUserInput] = useState('');

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
            console.log({ data });
        }catch(err){
            console.log('FRONT-ERRO', err);
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
                <div className="movie">
                    <div className="moviedescr">
                        <h3>Teste</h3>
                        <p className="mvsinopse" >testando o teste que ja foi testado até demais</p>
                        <p>Elenco</p>
                        <p>Review</p>
                        <button className="btstyle" >Favorite</button>
                    </div>
                    <img className="poster" alt="Movie Poster" src="poster.jpg" />
                </div>
            </section>
        </>
    );
}


export default Home;