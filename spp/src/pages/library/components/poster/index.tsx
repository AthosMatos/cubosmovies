<svg className="w-full h-full" viewBox="0 0 36 36">
  <circle cx="18" cy="18" r="16" fill="none" stroke="#333" strokeWidth="2" />
  <circle
    cx="18"
    cy="18"
    r="16"
    fill="none"
    stroke="#4CAF50"
    strokeWidth="3"
    strokeLinecap="round"
    strokeDasharray={`${movie.vote_average * 10}, 100`}
    transform="rotate(-90 18 18)"
  />
  <text
    x="18"
    y="22"
    textAnchor="middle"
    fontSize="12"
    fill="white"
    fontWeight="bold"
  >
    {movie.vote_average}
  </text>
</svg>;
