import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import { useTRPC } from "../../../../../trpc/utils";
import { libraryNavigationId, useLibraryPageContext } from "../../context";

const LibrayPageNav = () => {
  const { isTMDBList, movies, page, setPage } = useLibraryPageContext();
  const hasMovies = useMemo(() => movies.length > 0, [movies]);

  const trpc = useTRPC();

  const { data: pagesTotal } = useQuery(
    trpc.movies.getPageTotal.queryOptions()
  );

  if (!hasMovies) return null;

  const canGoPrev = page > 1;
  const canGoNext = isTMDBList || (pagesTotal ? page < pagesTotal : false);

  const goPrev = () => {
    if (canGoPrev) setPage(page - 1);
  };

  const goNext = () => {
    if (canGoNext) setPage(page + 1);
  };

  return (
    <div
      id={libraryNavigationId}
      className="flex gap-2 w-full h-12 items-center justify-center  select-none"
    >
      <div className="join">
        <button
          className="join-item btn dark:bg-purple-950/40 dark:text-white text-black bg-white border-zinc-300 dark:border-purple-800  disabled:!border-none shadow-none"
          onClick={goPrev}
          disabled={!canGoPrev}
        >
          «
        </button>
        <button className="join-item btn dark:bg-purple-950/40 dark:text-white text-black bg-white border-zinc-300 dark:border-purple-950  disabled:!border-none shadow-none">
          Page {page}
        </button>
        <button
          className="join-item btn dark:bg-purple-950/40 dark:text-white text-black bg-white border-zinc-300 dark:border-purple-800  disabled:!border-none shadow-none"
          onClick={goNext}
          disabled={!canGoNext}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default LibrayPageNav;
