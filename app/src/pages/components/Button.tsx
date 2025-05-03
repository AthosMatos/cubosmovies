import { AnimatePresence, motion } from "motion/react";
import { CgSpinner } from "react-icons/cg";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  secondary?: boolean;
}

const Spinner = motion(CgSpinner);

export const Button = (props: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      {...(props as any)}
      className={`p-2 flex text-white items-center justify-center font-semibold transition-colors active:bg-white/0 cursor-pointer px-4 text-sm rounded-lg overflow-hidden ${
        props.secondary
          ? "bg-purple-950/50 hover:bg-purple-950/40"
          : "dark:bg-purple-600 bg-purple-800 dark:hover:bg-purple-700"
      } ${props.className}`}
    >
      <AnimatePresence initial={false} mode="wait">
        {props.loading ? (
          <Spinner
            key={"spinner"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="text-base animate-spin"
          />
        ) : (
          <motion.div
            key={"button"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
