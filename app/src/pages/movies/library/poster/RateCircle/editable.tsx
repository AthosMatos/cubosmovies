import { motion } from "motion/react";

interface RateCircleProps {
  vote_average: number;
  className?: string;
  textClassName?: string;
  porcentClassName?: string;
  showRateCircle: boolean;
}

const RateCircle = ({
  vote_average,
  className,
  porcentClassName,
  textClassName,
  showRateCircle,
}: RateCircleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showRateCircle ? 1 : 0 }}
      className="flex items-center self-center justify-center backdrop-blur-[2px] w-fit rounded-full mt-[30%]"
    >
      <svg
        className={`lg:w-44 w-28 aspect-square dark:bg-zinc-950/30 bg-zinc-50/30 rounded-full  ${className}`}
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
    </motion.div>
  );
};
export default RateCircle;
