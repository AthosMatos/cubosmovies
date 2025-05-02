import { AnimatePresence, motion } from "motion/react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useTheme } from "../../../../../../context/Theme";

const SunIcon = motion(IoSunny);
const MoonIcon = motion(IoMoon);

const IconProps = (sun?: boolean) => {
  return {
    className: `text-2xl ${
      sun ? "text-yellow-600" : "text-blue-500"
    }  border-none outline-none`,

    whileHover: {
      rotate: 360,
      transition: { duration: 2, ease: "anticipate", repeat: Infinity },
    },
    whileTap: {
      scale: 0.8,
      transition: { duration: 0.4, ease: "anticipate" },
    },
  };
};

const ToogleTheme = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      className="p-2 dark:bg-zinc-800 bg-zinc-300 rounded-xl cursor-pointer"
      onClick={toogleTheme}
    >
      <AnimatePresence initial={false} mode="wait">
        {theme === "light" ? (
          <SunIcon
            key={"sun"}
            {...IconProps(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5, ease: "anticipate" }}
          />
        ) : (
          <MoonIcon
            key={"moon"}
            {...IconProps()}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5, ease: "anticipate" }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ToogleTheme;
