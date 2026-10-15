

function MovieCard({movie}) {
  return (

       <li key={movie.id} className="w-[23%] gap-1 mb-3">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </li>       
  )
}

export default MovieCard
