import { AnimatePresence, motion } from "motion/react";
import { CgSpinner } from "react-icons/cg";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  secondary?: boolean;
  terciary?: boolean;
  notButton?: boolean;
}

const Spinner = motion(CgSpinner);

export const Button = (props: ButtonProps) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (props.notButton) {
      return (
        <motion.div
          whileTap={{ scale: 0.95 }}
          {...(props as any)}
          className={`p-2 flex text-white items-center justify-center font-semibold transition-colors active:bg-white/0 cursor-pointer px-4 text-sm rounded-lg overflow-hidden ${
            props.secondary
              ? "bg-purple-950/50 hover:bg-purple-950/40"
              : props.terciary
              ? "border dark:border-white/40 border-black/40 hover:bg-purple-950/40"
              : "dark:bg-purple-600 bg-purple-800 dark:hover:bg-purple-700"
          } ${props.className}`}
        >
          {children}
        </motion.div>
      );
    }
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
        {children}
      </motion.button>
    );
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};
