import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="border-t border-slate-800/70 bg-slate-950/95 py-8 text-slate-400">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
      <p>Movie Explorer © {new Date().getFullYear()}</p>
      <div className="flex items-center gap-2">
        <Heart className="h-4 w-4 text-sky-400" />
        <span>Built for modern frontend deployment demos.</span>
      </div>
      <Link to="/about" className="text-slate-300 hover:text-white">
        About the pipeline
      </Link>
    </div>
  </footer>
)

export default Footer
