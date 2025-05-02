import { motion } from "motion/react";
import { CgSpinner } from "react-icons/cg";
import { useHeaderContext } from "../../../context/headerContext";

const Spinner = motion(CgSpinner);

const LoadingPage = () => {
  const { headerHeight } = useHeaderContext();
  return (
    <div
      style={{
        marginBottom: headerHeight /* Compensar o header e manter centrado */,
      }}
      className="flex flex-[1] items-center justify-center"
    >
      <Spinner
        animate={{ rotate: 360 }}
        transition={{
          ease: "anticipate",
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="w-16 h-16 text-purple-500"
      />
    </div>
  );
};

export default LoadingPage;
