import { useMovie } from "../hooks/UseMovie"

function Home() {
    const {movies} = useMovie();
    console.log(movies)
  return (
    <div className="w-full min-h-screen bg-[#030014] text-white">
      <div className="text-center leading-tight text-2xl ">
  <h1>Find <span className="text-2xl font-semibold text-purple-500 ">Movies</span> You'll Enjoy Without the Hassle</h1>
</div>
<h2>All Movies</h2>
    <ul className="flex w-full p-4m justify-evenly flex-wrap">
      {movies?.map((movie)=>(
        <li key={movie.id} className="w-[23%]">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </li>
      ))}

    </ul>
      </div>
  )
}

export default Home