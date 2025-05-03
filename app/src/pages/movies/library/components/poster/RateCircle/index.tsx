interface RateCircleProps {
  vote_average: number;
  className?: string;
  textClassName?: string;
  porcentClassName?: string;
}

const RateCircle = ({
  vote_average,
  className,
  porcentClassName,
  textClassName,
}: RateCircleProps) => {
  return (
    <>
      <svg
        className={`lg:w-44 w-28 aspect-square dark:bg-zinc-950/30 bg-zinc-50/30 rounded-full backdrop-blur-[2px] ${className}`}
        viewBox="0 0 36 36"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-zinc-500/50 "
          strokeWidth="2"
        />
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="dark:stroke-yellow-300 stroke-yellow-500"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${vote_average}, 100`}
          transform="rotate(-90 18 18)"
        />
      </svg>
      <p
        className={`lg:text-3xl text-xl flex items-end absolute text-black dark:text-white font-semibold ${textClassName}`}
      >
        {Math.round(vote_average)}
        <p className={`text-xl ${porcentClassName}`}>%</p>
      </p>
    </>
  );
};
export default RateCircle;
