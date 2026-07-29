const RatingBadge = ({ value }) => (
  <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-slate-100 ring-1 ring-slate-700">
    <span className="mr-2 text-sky-400">★</span>
    {value.toFixed(1)}
  </span>
)

export default RatingBadge
