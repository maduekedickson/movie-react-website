import { Code, Cloud, Server, Sparkles } from 'lucide-react'

const About = () => (
  <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-glow">
      <div className="flex flex-col gap-4 text-slate-100 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-sky-300">About Movie Explorer</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">Modern frontend CI/CD Pipeline showcase</h1>
        </div>
        <div className="inline-flex items-center gap-2 rounded-3xl bg-slate-950 px-5 py-3 text-slate-300 ring-1 ring-slate-700">
          <Sparkles className="h-5 w-5 text-sky-400" />
          Production-ready build
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section className="space-y-4 rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8">
          <h2 className="text-2xl font-semibold text-white">Purpose</h2>
          <p className="text-slate-300">
            Movie Explorer is a compact, modern React application built with Vite and Tailwind CSS. The project is structured to demonstrate how a developer push triggers a GitHub Actions workflow that builds the app and deploys the generated distribution to an AWS EC2 instance served by Apache.
          </p>
        </section>

        <section className="space-y-4 rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8">
          <h2 className="text-2xl font-semibold text-white">Built with</h2>
          <ul className="space-y-3 text-slate-300">
            {['React 19', 'Vite', 'Tailwind CSS', 'React Router', 'Axios', 'Lucide React', 'TMDB API', 'GitHub Actions', 'AWS EC2', 'Apache Web Server'].map((tech) => (
              <li key={tech} className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500 text-slate-950">
            <Code className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-white">Clean code</h3>
          <p className="mt-3 text-slate-300">Functional components, hooks, reusable UI, and performance-minded lazy loading.</p>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-700 text-sky-300">
            <Cloud className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-white">Deployment-ready</h3>
          <p className="mt-3 text-slate-300">A dist folder can be served by Apache after a successful build and GitHub Actions deploy step.</p>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-700 text-fuchsia-300">
            <Server className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-white">Real pipeline</h3>
          <p className="mt-3 text-slate-300">GitHub pushes, builds, and automated deployment to EC2 with Apache are the focus, not a massive app feature set.</p>
        </div>
      </div>
    </div>
  </div>
)

export default About
