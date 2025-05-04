import { useQueryClient } from "@tanstack/react-query";
import { FaFilter, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useWindowDimensions } from "../../../../../hooks/useWindowSize";
import { pagePaths } from "../../../../../routes/paths";
import { useTRPC } from "../../../../../trpc/utils";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { useLibraryPageContext } from "../../context";
import { MovieSwitchButton } from "../../styled";
import FilterModal from "./filterModal";

const LibraryHeader = () => {
  const { isTMDBList, setIsTMDBList, setSearch, pendingSearch, setPage } =
    useLibraryPageContext();
  const {
    dimensions: { width },
  } = useWindowDimensions();
  const queryClient = useQueryClient();
  const trpc = useTRPC();
  const pageTotalKey = trpc.movies.getPageTotal.queryKey();
  const navigate = useNavigate();
  return (
    <div
      id="libraryheader"
      className="flex lg:w-fit w-full items-center justify-end flex-wrap gap-3"
    >
      <Input
        searching={pendingSearch}
        className="w-full lg:w-1/3"
        placeholder="Pesquise por filmes"
        icon="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="flex gap-1 h-fit bg-zinc-100/70 dark:bg-black/80 rounded-lg p-1 border dark:border-zinc-700 border-zinc-500">
        <MovieSwitchButton
          isSelected={!isTMDBList}
          onClick={() => {
            setIsTMDBList(false);
            queryClient.invalidateQueries({ queryKey: pageTotalKey });
            setPage(1);
          }}
        >
          Meus Filmes
        </MovieSwitchButton>
        <MovieSwitchButton
          isSelected={isTMDBList}
          onClick={() => {
            setIsTMDBList(true);
          }}
        >
          Filmes da TMDB
        </MovieSwitchButton>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <div className="flex gap-2">
        <Button
          className="w-max"
          onClick={() => {
            const modal = document.getElementById(
              "my_modal_2"
            ) as HTMLDialogElement;
            if (modal) {
              modal.showModal();
            }
          }}
        >
          {width > 768 ? " Filtros" : <FaFilter />}
        </Button>
        <Button
          onClick={() => {
            navigate(pagePaths.movieCreator.path);
          }}
          secondary
        >
          {width > 768 ? "Adicionar Filmes" : <FaPlus />}
        </Button>
      </div>
      <FilterModal />
    </div>
  );
};

export default LibraryHeader;
