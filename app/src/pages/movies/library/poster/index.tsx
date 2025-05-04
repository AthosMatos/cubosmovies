import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaCheck, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router";
import { pagePaths } from "../../../../routes/paths";
import { useTRPC } from "../../../../trpc/utils";
import { Spinner } from "../../../suportPages/loading";
import { useMovies } from "../../context";
import { MovieDetailsProps } from "../../details/interfaces";
import { useLibraryPageContext } from "../context";
import RateCircle from "./RateCircle";
import { MoviePostWrapper } from "./styled";

const Check = motion(FaCheck);
const Plus = motion(FaPlus);

const motionProps = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
    mass: 0.5,
    duration: 0.2,
  },
};

const MoviePoster = (movie: MovieDetailsProps) => {
  const { id, title, poster, backdrop, vote_average, genre } = movie;
  const [showRateCircle, setShowRateCircle] = useState(false);
  const { loadedList } = useLibraryPageContext();
  const trpc = useTRPC();
  const { mutateAsync: existsByName, data: isInLibrary } = useMutation(
    trpc.movies.existsByName.mutationOptions()
  );

  const navigate = useNavigate();
  const { toogleToLocalList: addToLocalList, pending: pendingAddOrRemove } =
    useMovies({
      onDelete: () => {
        existsByName(movie.title);
      },
    });

  useEffect(() => {
    existsByName(movie.title);
  }, [pendingAddOrRemove]);

  return (
    <MoviePostWrapper
      onMouseOver={() => setShowRateCircle(true)}
      onMouseLeave={() => setShowRateCircle(false)}
      onTouchStart={() => setShowRateCircle(true)}
      onTouchEnd={() => setShowRateCircle(false)}
      backgroundImage={poster || backdrop || ""}
    >
      {loadedList == "tmdb" && (
        <div
          onClick={() => {
            //setIsInLibrary((prev) => !prev);
            addToLocalList(movie);
          }}
          title="Adicionar à sua lista"
          className="absolute z-20 top-0 right-0 m-2 p-3 text-lg bg-zinc-900/60 active:scale-95 border-zinc-600 border rounded-full hover:bg-zinc-900/80 transition-colors duration-200 ease-in-out"
        >
          <AnimatePresence initial={false} mode="wait">
            {pendingAddOrRemove ? (
              <Spinner
                key={"spinner"}
                {...motionProps}
                className="text-purple-500"
              />
            ) : isInLibrary ? (
              <Check
                key={"check"}
                {...motionProps}
                className="pointer-events-none"
              />
            ) : (
              <Plus
                key={"plus"}
                {...motionProps}
                className="pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>
      )}

      <div
        onClick={() => {
          if (loadedList == "tmdb") {
            navigate(pagePaths.detailsTMDB.pathCustomParams(id.toString()));
          } else {
            navigate(pagePaths.details.pathCustomParams(id.toString()));
          }
        }}
        className="justify-between flex flex-col relative h-full"
      >
        <RateCircle
          showRateCircle={showRateCircle}
          vote_average={vote_average}
        />

        <div className="p-5">
          <motion.h3
            layout
            className="text-sm lg:text-lg text-black dark:text-white font-semibold uppercase"
          >
            {title}
          </motion.h3>

          <AnimatePresence initial={false} mode="popLayout">
            {showRateCircle && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
                className="flex flex-wrap gap-1"
              >
                {genre?.map((genre, index) => (
                  <span
                    key={index}
                    className="lg:text-sm text-xs dark:text-white/50 text-black/50"
                  >
                    {genre.name}
                  </span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MoviePostWrapper>
  );
};

export default MoviePoster;
