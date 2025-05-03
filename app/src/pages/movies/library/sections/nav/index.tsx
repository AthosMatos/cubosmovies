import { useMutation } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useTRPC } from "../../../../../trpc/utils";
import { libraryNavigationId, useLibraryPageContext } from "../../context";

const NavigationButton = ({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-9 h-9 flex items-center justify-center font-bold rounded-md dark:bg-zinc-800 bg-zinc-500 dark:text-white text-zinc-100 cursor-pointer ${
        disabled ? "opacity-30 dark:opacity-50" : ""
      }`}
    >
      {children}
    </div>
  );
};

const IndexButton = ({
  page,
  index,
  setPage,
}: {
  page: number;
  index: number;
  setPage: (page: number) => void;
}) => {
  return (
    <div
      onClick={() => setPage(index)}
      className={`w-9 h-9 flex items-center justify-center font-bold rounded-md bg-purple-950 border border-purple-700 text-white/80 cursor-pointer ${
        page === index ? "" : "opacity-20 dark:opacity-50"
      }`}
    >
      {index}
    </div>
  );
};

const LibrayPageNav = () => {
  const { isTMDBList, movies, page, setPage } = useLibraryPageContext();

  const trpc = useTRPC();
  const { data: pagesTotal, mutate: getPagesTotal } = useMutation(
    trpc.movies.getPageTotal.mutationOptions()
  );

  useEffect(() => {
    getPagesTotal();
  }, [movies]);

  const indexes = useMemo(() => {
    const ptt = isTMDBList ? null : pagesTotal;

    const p = ptt || page / 5;
    //verify if p is a integer

    if (page > 5 && p % 1 !== 0) {
      return Array.from({ length: ptt || 5 }).map(
        (_, index) => page - 1 + index
      );
    }
    return Array.from({ length: ptt || 5 }).map((_, index) => index + 1);
  }, [isTMDBList, page]);

  return (
    <div
      id={libraryNavigationId}
      className="flex gap-2 w-full h-12 items-center justify-center lg:justify-end select-none"
    >
      {movies.length ? (
        <>
          <NavigationButton
            disabled={page === 1}
            onClick={() => {
              if (page > 1) setPage(page - 1);
            }}
          >
            <FaCaretLeft />
          </NavigationButton>

          {indexes.map((value) => (
            <IndexButton
              key={value}
              page={page}
              index={value}
              setPage={setPage}
            />
          ))}
          <NavigationButton
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <FaCaretRight />
          </NavigationButton>
        </>
      ) : null}
    </div>
  );
};

export default LibrayPageNav;
