import { Button } from "../../components/Button";
import { PageTransitionSlide } from "../../components/PageTransitionWrapper";
import { MoviePageLayout } from "../layouts";
import RateCircle from "../library/poster/RateCircle";
import { BackDropButton } from "./components/backdrop";
import { Genre } from "./components/genre";
import { EditorInput } from "./components/Input";
import { Poster } from "./components/poster";
import { MovieEditorPageProvider, useMovieEditorPageContext } from "./context";

const MEP = () => {
  const {
    submit,
    exists,
    movie,
    id,
    toogleToLocalList,
    updateMovie,
    pendingCreate,
    pendingUpdate,
    setValue,
  } = useMovieEditorPageContext();

  return (
    <PageTransitionSlide className="items-center justify-center flex w-full">
      <form onSubmit={submit}>
        <MoviePageLayout
          buttons={
            id ? (
              <div className="flex gap-2">
                {exists && (
                  <Button
                    loading={pendingUpdate}
                    onClick={updateMovie}
                    type="button"
                    secondary
                  >
                    Salvar
                  </Button>
                )}
                <Button
                  loading={pendingCreate}
                  onClick={() => toogleToLocalList(movie)}
                  type="button"
                >
                  {!exists
                    ? "Adicionar a minha lista"
                    : "Remover da minha lista"}
                </Button>
                <BackDropButton />
              </div>
            ) : (
              <div className="flex gap-2">
                <Button loading={pendingCreate}>
                  {!exists
                    ? "Adicionar a minha lista"
                    : "Remover da minha lista"}
                </Button>
                <BackDropButton />
              </div>
            )
          }
          movie={{
            title: (
              <EditorInput
                className="lg:text-6xl text-3xl  font-semibold lg:text-start text-center"
                type="text"
                placeholder="Título"
                name="title"
              />
            ),
            original_title: (
              <EditorInput
                className="font-light text-base lg:text-3xl lg:text-start text-center"
                type="text"
                placeholder="Título Original"
                name="original_title"
              />
            ),
            poster: <Poster />,
            backdrop: movie?.backdrop,
            subtitle: (
              <EditorInput
                className="italic"
                type="text"
                placeholder="Subtítulo"
                name="subtitle"
              />
            ),
            synopsis: (
              <EditorInput
                className="w-full"
                type="text"
                placeholder="Sinopse"
                name="synopsis"
              />
            ),
            genre: <Genre />,
            popularity: (
              <EditorInput
                className="w-full"
                type="number"
                placeholder="Popularidade"
                name="popularity"
              />
            ),
            vote_count: (
              <EditorInput
                className="w-full"
                type="number"
                placeholder="Votos"
                name="vote_count"
              />
            ),
            vote_average: (
              <RateCircle
                showRateCircle={true}
                vote_average={movie?.vote_average || 0}
                className="!w-28 !text-xl"
                textClassName="!text-2xl"
                porcentClassName="!text-base"
              />
            ),
            release_date: (
              <EditorInput
                className="w-full"
                type="date"
                placeholder="Data de Lançamento"
                name="release_date"
              />
            ),
            duration: (
              <EditorInput
                className="w-full"
                type="text"
                placeholder="Duração"
                name="duration"
              />
            ),
            situation: (
              <EditorInput
                className="w-full"
                type="text"
                placeholder="Situação"
                name="situation"
              />
            ),
            language: (
              <EditorInput
                className="w-full"
                type="text"
                placeholder="Linguagem"
                name="language"
              />
            ),
            budget: (
              <EditorInput
                className="w-full"
                type="number"
                placeholder="Orçamento"
                name="budget"
              />
            ),
            revenue: (
              <EditorInput
                className="w-full"
                type="number"
                placeholder="Receita"
                name="revenue"
              />
            ),
            profit: (
              <EditorInput
                className="w-full"
                type="number"
                placeholder="Lucro"
                name="profit"
              />
            ),
          }}
        />
      </form>
    </PageTransitionSlide>
  );
};

const MovieEditorPage = () => (
  <MovieEditorPageProvider>
    <MEP />
  </MovieEditorPageProvider>
);

export default MovieEditorPage;
