import React from "react";
const Qwert = ({movie}) => {
    return(
        <>
        <div className='movie'></div>
         <div>
          <p>{movie.Year}</p>
         </div>
         <div>
          <img src={movie.Poster !== 'N/A' ? movie.Poster: 'https://via.placeholder.com/400' } alt ="what" />
         </div>
         </>
    )
}
export default Qwert;