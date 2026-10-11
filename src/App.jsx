


function App() {


  return (
      <div className="w-full h-screen  bg-black text-white">
<nav className="flex justify-between items-center p-4">
<div className="text-2xl font-semibold text-purple-500">
  <h1>Motion</h1>
</div>

<div className=" p-6 py-4 rounded-full border-2 border-white/80 bg-transparent text-white outline-none flex items-center gap-2">
  <input className="w-120" type="search" placeholder="Search for movies ,series and people " />
</div>



<div className="flex gap-4 ">

  <ul className="flex gap-4 items-center">

  <li className="text-purple-500 underline decoration-purple-500 ">Home</li>
  <li>NowShowing</li>
  <li>Series</li>
  <li>Popular</li>
  <li></li>
  </ul>

</div>

</nav>

<div className="text-center mt-5 leading-tight text-2xl ">
  <h1>Find <span className="text-2xl font-semibold text-purple-500 ">Movies</span> You'll Enjoy Without the Hassle</h1>
</div>


<div className="text-2xl mt-4" >
  <h1>Top Movie Streaming Options</h1>
</div>




    </div>
  )
}

export default App
