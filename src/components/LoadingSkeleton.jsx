const LoadingSkeleton = () => (
  <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
    <div className="space-y-4">
      <div className="h-12 w-48 animate-pulse rounded-3xl bg-slate-800" />
      <div className="h-80 animate-pulse rounded-[2rem] bg-slate-800" />
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="space-y-3 rounded-[2rem] border border-slate-800/90 bg-slate-900/75 p-5 shadow-xl">
          <div className="h-64 animate-pulse rounded-3xl bg-slate-800" />
          <div className="h-4 w-3/4 animate-pulse rounded-full bg-slate-800" />
          <div className="h-4 w-1/2 animate-pulse rounded-full bg-slate-800" />
        </div>
      ))}
    </div>
  </div>
)

export default LoadingSkeleton
