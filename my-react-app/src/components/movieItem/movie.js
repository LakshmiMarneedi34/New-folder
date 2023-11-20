import "./movie.css"

const MakeMovieCard = (prop) => {
   const {MovieDetails} = prop
   const {title,genre,director,stars,totalVoted,pageViews,language,releasedDate} = MovieDetails
   const date = new Date(releasedDate * 1000); 
   console.log(date.toUTCString());
   return(
      <li className="movie-li-item">
         <div className="movie-detailed-card">
            <div className="votes-container">
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
               </svg>
               <h1 className="vote-heading">{totalVoted}</h1>
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
               </svg>
               <h1 className="vote-heading">Votes</h1>
            </div>
            <img src={MovieDetails.poster} alt="Movie-poster" className="poster"/>
            <div className="full-detailed-container">
               <h1>{title}</h1>
               <p><b>Genre</b> {genre}</p>
               <p><b>Director</b> {director}</p>
               <p><b>Staring</b> {stars}</p>
               <p> Mins | {language} | {date.toUTCString()}</p>
               <p className="views-votes">{pageViews} views | voted by {totalVoted} people</p>
            </div>
         </div>
         <button type="button" className="watch-button">Watch Trailer</button>
      </li>
   )
}

export default MakeMovieCard