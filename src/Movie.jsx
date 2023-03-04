import React from "react";

const Movie = (props) => {
    return (
        <>
            <div className="movie">
                <div className="moviedescr">
                    <h3>{props.title}</h3>
                    <p className="mvsinopse" >{props.sinopse}</p>
                    <p>{props.elenco}</p>
                    {/* <p>Review</p> */}
                    <button className="btstyle" >Favorite</button>
                </div>
                <img className="poster" alt="Movie Poster" src={props.poster} />
            </div>
        </>
    )
}

export default Movie;