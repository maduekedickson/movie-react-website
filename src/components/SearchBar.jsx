import { Search } from 'lucide-react'

const SearchBar = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="flex w-full max-w-3xl items-center gap-2 rounded-3xl border border-slate-800 bg-slate-900/70 p-3 shadow-glow">
    <label htmlFor="movie-search" className="sr-only">Search movies</label>
    <Search className="h-5 w-5 text-sky-300" />
    <input
      id="movie-search"
      type="search"
      value={value}
      onChange={onChange}
      placeholder="Search movies, titles, actors..."
      className="w-full rounded-2xl bg-slate-950/90 px-3 py-3 text-sm text-slate-100 outline-none ring-1 ring-slate-800 placeholder:text-slate-500 focus:ring-sky-400"
    />
    <button
      type="submit"
      className="rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
    >
      Search
    </button>
  </form>
)

export default SearchBar
