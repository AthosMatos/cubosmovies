import { motion } from "motion/react";
import { CgSpinner } from "react-icons/cg";
import { useDimensionsHelperContext } from "../../../context/DimensionsHelperContext";

const Spin = motion(CgSpinner);

export const Spinner = ({
  className,
  animate,
  exit,
  initial,
  transition,
  faster,
}: {
  className?: string;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  faster?: boolean;
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      <Spin
        animate={{ rotate: 360 }}
        transition={{
          ease: faster ? "linear" : "anticipate",
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className={className}
      />
    </motion.div>
  );
};

const LoadingPage = () => {
  const { headerHeight } = useDimensionsHelperContext();
  return (
    <div
      style={{
        marginBottom: headerHeight /* Compensar o header e manter centrado */,
      }}
      className="flex flex-[1] items-center justify-center"
    >
      <Spinner className="w-16 h-16 text-purple-500" />
    </div>
  );
};

export default LoadingPage;
