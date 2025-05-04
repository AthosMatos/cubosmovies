import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTRPC } from "../../../../../../trpc/utils";
import { Button } from "../../../../../components/Button";
import { Input } from "../../../../../components/Input";
import { getMovieGenres } from "../../../../funcs";
import { FilterFormData, useLibraryPageContext } from "../../../context";

const FilterModal = () => {
  const { handleFormSubmit, isTMDBList, defaultGetMovies } =
    useLibraryPageContext();

  const trpc = useTRPC();
  const { data: genresLocal } = useQuery(
    trpc.genres.getAll.queryOptions(undefined, {
      enabled: !isTMDBList,
    })
  );
  const { data: genresTMDB } = useQuery({
    queryKey: ["moviesTmdb"],
    queryFn: getMovieGenres,
    enabled: isTMDBList,
  });
  const { handleSubmit, register, reset } = useForm<FilterFormData>({
    mode: "onChange",
  });

  const genres = useMemo(() => {
    if (isTMDBList) {
      return genresTMDB;
    } else {
      return genresLocal;
    }
  }, [isTMDBList, genresLocal, genresTMDB]);

  return (
    <dialog
      id="my_modal_2"
      className="modal backdrop-blur-xs  text-black dark:text-white"
    >
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="modal-box lg:max-w-[700px] max-h-[80vh] rounded-2xl border dark:border-zinc-600 border-zinc-400 dark:bg-zinc-900 bg-zinc-100 flex flex-col gap-4"
      >
        <h3 className="font-bold text-lg">Filtros</h3>
        <div className="flex lg:flex-row flex-col gap-4">
          <Input
            icon="time"
            label="Duração mínima"
            type="number"
            placeholder="0"
            className="w-full "
            {...register("DurationMin", {
              valueAsNumber: true,
            })}
            afterLabel="Minutos"
          />
          <Input
            icon="time"
            label="Duração máxima"
            type="number"
            placeholder="0"
            className="w-full "
            {...register("DurationMax", {
              valueAsNumber: true,
            })}
            afterLabel="Minutos"
          />
        </div>
        <div className="flex gap-4 lg:flex-row flex-col">
          <Input
            label="Data de lançamento mínima"
            type="date"
            placeholder="0"
            className="lg:w-max w-full"
            {...register("DateMin", {
              valueAsDate: true,
            })}
          />
          <Input
            label="Data de lançamento máxima"
            type="date"
            placeholder="0"
            className="lg:w-max w-full"
            {...register("DateMax", {
              valueAsDate: true,
            })}
          />
        </div>
        <div className="flex gap-4 flex-wrap">
          {genres?.map((genre) => (
            <div key={genre.id} className="flex gap-2 items-center">
              <input
                type="checkbox"
                id={genre.name}
                value={genre.id}
                {...register("Genres", {
                  valueAsNumber: true,
                })}
              />
              <label
                htmlFor={genre.name}
                className="text-sm text-zinc-800 dark:text-zinc-200"
              >
                {genre.name}
              </label>
            </div>
          ))}
        </div>

        <div className="modal-action flex gap-4 justify-end">
          <Button
            type="button"
            secondary
            onClick={() => {
              reset();
              defaultGetMovies();
            }}
          >
            Limpar filtros
          </Button>
          <Button type="submit">Aplicar filtros</Button>
        </div>
      </form>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default FilterModal;
