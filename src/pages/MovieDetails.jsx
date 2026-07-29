import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Clock3, Globe2, HeartPulse, Star } from 'lucide-react'
import { fetchMovieDetails, getPosterUrl } from '../services/tmdb'
import LoadingSkeleton from '../components/LoadingSkeleton'

const MovieDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetchMovieDetails(id)
      .then(setMovie)
      .catch(() => setError('Unable to load movie details.'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <LoadingSkeleton />
  }

  if (error || !movie) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center text-slate-300 sm:px-6 lg:px-8">
        <p className="text-xl font-semibold">Unable to load movie details.</p>
        <p className="mt-2 text-sm text-slate-400">Please return to the homepage and try another title.</p>
        <button onClick={() => navigate('/')} className="mt-6 rounded-3xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
          Back to Home
        </button>
      </div>
    )
  }

  const backdropUrl = getPosterUrl(movie.backdrop_path, 'w1280')
  const posterUrl = getPosterUrl(movie.poster_path, 'w500')

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-700 hover:bg-slate-800"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 shadow-xl">
        <div className="relative">
          <img src={backdropUrl} alt={movie.title} className="h-72 w-full object-cover object-center opacity-90 sm:h-96" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
            <div className="max-w-4xl rounded-[2rem] bg-slate-950/70 p-6 backdrop-blur-xl sm:p-8">
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">{movie.title}</h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
                {movie.tagline || 'A premium film detail experience built for modern frontend deployment.'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 px-6 py-10 lg:grid-cols-[360px_1fr] lg:px-10">
          <div className="space-y-6">
            <img src={posterUrl} alt={movie.title} className="mx-auto max-h-[560px] rounded-[2rem] shadow-2xl shadow-slate-950/60" />
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-200">
                  <Star className="h-4 w-4 text-sky-400" />
                  {movie.vote_average.toFixed(1)}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-200">
                  <HeartPulse className="h-4 w-4 text-fuchsia-400" />
                  {movie.popularity.toFixed(0)} popularity
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span>{movie.release_date}</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>{movie.runtime} min</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>{movie.original_language.toUpperCase()}</span>
              </div>
              <div className="mt-6 space-y-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">Overview</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{movie.overview}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Genres</h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {movie.genres.map((genre) => (
                      <span key={genre.id} className="rounded-3xl bg-slate-900 px-4 py-2 text-sm text-slate-200">
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-sm uppercase tracking-[0.24em] text-slate-500">Vote average</h3>
                  <p className="text-3xl font-semibold text-white">{movie.vote_average.toFixed(1)}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm uppercase tracking-[0.24em] text-slate-500">Language</h3>
                  <p className="text-3xl font-semibold text-white">{movie.original_language.toUpperCase()}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8">
              <h2 className="text-xl font-semibold text-white">Deployment focus</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Movie Explorer is designed to demonstrate a production-grade CI/CD pipeline with GitHub Actions deploying a Vite-built React app to AWS EC2 and Apache.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
