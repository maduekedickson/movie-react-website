import { ArrowRight, Sparkles } from 'lucide-react'
import SearchBar from './SearchBar'

const Hero = ({ query, onQueryChange, onSearch, onTrending }) => (
  <section className="overflow-hidden rounded-[2rem] bg-hero p-8 shadow-glow sm:p-12 lg:p-16">
    <div className="max-w-4xl space-y-8 text-slate-100">
      <div className="inline-flex items-center gap-3 rounded-full bg-slate-900/80 px-4 py-2 text-sm text-sky-200 ring-1 ring-sky-400/20">
        <Sparkles className="h-4 w-4" />
        Build-ready movie streaming experience for CI/CD demonstration.
      </div>
      <div className="space-y-5">
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          Movie Explorer
        </h1>
        <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
          Discover trending and popular films with fast search, professional layouts, and production-ready deployment architecture.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-[1.4fr_auto]">
        <SearchBar value={query} onChange={onQueryChange} onSubmit={onSearch} />
        <button
          type="button"
          onClick={onTrending}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-3xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Trending movies
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  </section>
)

export default Hero
