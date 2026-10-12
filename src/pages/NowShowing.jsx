function NowShowing() {
    const movie=["https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
      "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
      "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
      "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
      "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
      "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
       "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
      "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
       "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
       "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
       "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",  
         "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
      "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
      "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
       "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
      "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
       "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
       "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
       "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",  
         "https://image.tmdb.org/t/p/w500/iISM36voS1E8gX9BM0DVK0kgi3E.jpg",
                    
                

  ]
  return (
    <div className="w-full min-h-screen bg-[#030014] text-white">
      <div className="text-center leading-tight text-2xl ">
  <h1>Find <span className="text-2xl font-semibold text-purple-500 ">Movies</span> You'll Enjoy Without the Hassle</h1>
</div>
<h2>All Movies</h2>
    <ul className="flex w-full p-4m justify-evenly flex-wrap">
      {movie.map((movie)=>(
        <li key={movie}className="w-[23%]">
          <img src={movie} alt="movie" />
        </li>
      ))}

    </ul>
      </div>
  )
}

export default NowShowing