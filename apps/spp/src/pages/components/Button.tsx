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
      className={`p-2 flex text-white items-center bg-linear-65 justify-center font-semibold transition-colors active:bg-white/0 cursor-pointer px-4 hover:bg-white/15 text-sm  rounded-lg overflow-hidden ${
        props.secondary
          ? "from-zinc-700 to-zinc-400"
          : "from-purple-900 to-pink-400"
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
