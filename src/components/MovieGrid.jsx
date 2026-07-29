import MovieCard from './MovieCard'

const MovieGrid = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="rounded-[2rem] border border-dashed border-slate-700 bg-slate-900/80 p-12 text-center text-slate-400">
        No movies were found. Try another search or refresh the page.
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieGrid
