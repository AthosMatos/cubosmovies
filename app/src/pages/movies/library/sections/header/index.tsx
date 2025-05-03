import { FaFilter, FaPlus } from "react-icons/fa";
import { useWindowDimensions } from "../../../../../hooks/useWindowSize";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { useLibraryPageContext } from "../../context";
import { MovieSwitchButton } from "../../styled";

const LibraryHeader = () => {
  const { isTMDBList, setIsTMDBList, setSearch, pendingSearch } =
    useLibraryPageContext();
  const {
    dimensions: { width },
  } = useWindowDimensions();

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

      <div className="flex gap-2">
        <Button secondary>{width > 768 ? "Filtros" : <FaFilter />}</Button>
        <Button className="w-max">
          {width > 768 ? "Adicionar Filmes" : <FaPlus />}
        </Button>
      </div>
    </div>
  );
};

export default LibraryHeader;
