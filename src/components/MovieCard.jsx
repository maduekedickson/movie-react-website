import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { getPosterUrl } from '../services/tmdb'

const MovieCard = ({ movie }) => {
  const poster = getPosterUrl(movie.poster_path)
  const year = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'

  return (
    <Link to={`/movie/${movie.id}`} className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-slate-800/95">
      <div className="relative overflow-hidden rounded-[2rem] bg-slate-950">
        <img
          src={poster}
          alt={movie.title}
          width="100%"
          height="100%"
          className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold text-slate-100 line-clamp-2">{movie.title}</h3>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">{year}</span>
        </div>
        <p className="text-sm text-slate-400 line-clamp-2">{movie.overview || 'No description available.'}</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-2 text-sm text-slate-200 ring-1 ring-slate-800">
          <Star className="h-4 w-4 text-sky-400" />
          <span>{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
