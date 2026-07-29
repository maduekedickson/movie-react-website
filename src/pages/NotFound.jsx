import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'

const NotFound = () => (
  <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
    <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-14 shadow-xl">
      <AlertTriangle className="mx-auto h-14 w-14 text-sky-400" />
      <h1 className="mt-6 text-4xl font-semibold text-white">Page not found</h1>
      <p className="mt-4 max-w-xl text-slate-400">The page you are looking for does not exist yet. Return home to continue exploring movies.</p>
      <Link to="/" className="mt-8 inline-flex rounded-3xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
        Back to home
      </Link>
    </div>
  </div>
)

export default NotFound
