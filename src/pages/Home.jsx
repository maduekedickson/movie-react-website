import { useMemo, useState } from 'react'
import { fetchPopular, fetchTrending, searchMovies } from '../services/tmdb'
import Hero from '../components/Hero'
import MovieGrid from '../components/MovieGrid'
import LoadingSkeleton from '../components/LoadingSkeleton'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [searching, setSearching] = useState(false)
  const [error, setError] = useState(null)

  const { data: popularMovies, loading: popularLoading, error: popularError } = useFetch(fetchPopular, [])
  const { data: trendingMovies, loading: trendingLoading, error: trendingError } = useFetch(fetchTrending, [])

  const heroMovies = useMemo(() => popularMovies?.slice(0, 6) ?? [], [popularMovies])
  const isLoading = popularLoading || trendingLoading || searching
  const hasError = popularError || trendingError || error

  const handleSearch = async (event) => {
    event.preventDefault()
    if (!query.trim()) {
      setError('Enter a movie name to search.')
      return
    }

    setSearching(true)
    setError(null)

    try {
      const results = await searchMovies(query.trim())
      setMovies(results)
    } catch (err) {
      setError('Unable to search movies. Please try again later.')
    } finally {
      setSearching(false)
    }
  }

  const displayMovies = query.trim() ? movies : popularMovies

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <Hero
        query={query}
        onQueryChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
        onTrending={() => {
          setMovies(trendingMovies ?? [])
          setQuery('')
        }}
      />

      <section className="mt-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Showcase</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Popular movies</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-400">
            Browse the latest popular movie cards rendered from TMDB API and ready for production deployment. Thank You.
          </p>
        </div>

        <div className="mt-8">
          {isLoading && <LoadingSkeleton />}
          {hasError && (
            <div className="rounded-[2rem] border border-red-500/30 bg-red-500/10 p-8 text-center text-slate-200">
              <p className="text-lg font-medium">Oops, something went wrong.</p>
              <p className="mt-2 text-sm text-slate-300">Please refresh or try again later.</p>
            </div>
          )}
          {!isLoading && !hasError && <MovieGrid movies={displayMovies} />}
        </div>
      </section>
    </div>
  )
}

export default Home
