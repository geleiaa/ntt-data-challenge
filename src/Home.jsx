import React from "react";

const getNaApi = async (e) => {
    e.preventDefault();
    const search = e.target.value;
    console.log('INPUT', search);
    await fetch(`http://localhost:1234/${search}`)
         .then(resp => console.log(resp.body))
         .catch(err => console.log('FRONT-ERROR', err))
}

const Home = () => {
    return (
        <>
            <section>
                <div>
                    <h3>Seach Sinopse</h3>
                    <p>Qualquer texto só pra testar</p>
                </div>
                <div className="search">
                    <input placeholder="Search" className="inpstyle" type='text' />
                    <button className="btstyle" onClick={e => getNaApi(e)} >Submit</button>
                    <button className="btstyle" >Reset</button>
                </div >
            </section>
            <section>
                <div className="movie">
                    <div className="moviedescr">
                        <h3>Movie Title</h3>
                        <p className="mvsinopse" >
                            Thirty years after the events of Blade Runner (1982), <br />
                            a new Blade Runner, L.A.P.D. Officer "K" (Ryan Gosling), unearths a long-buried secret that has <br />
                            the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find <br />
                            Rick Deckard (Harrison Ford), a former L.A.P.D. Blade Runner, who has been missing for thirty years. <br /> </p>
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