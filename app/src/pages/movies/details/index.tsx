import { Img } from "react-image";
import { useNavigate } from "react-router";
import { useDimensionsHelperContext } from "../../../context/DimensionsHelperContext";
import { pagePaths } from "../../../routes/paths";
import { Button } from "../../components/Button";
import { PageTransitionSlide } from "../../components/PageTransitionWrapper";
import { Spinner } from "../../suportPages/loading";
import { MoviePageLayout } from "../layouts";
import RateCircle from "../library/poster/RateCircle";
import { DetailsPageProvider, useDetailsPageContext } from "./context";
import { formatToCurrency } from "./funcs";

const MovieDetailsPage = () => {
  const { movie, isTMDB, exists, toogleToLocalList } = useDetailsPageContext();
  const { spaceBetweenHeaderAndFooter } = useDimensionsHelperContext();
  const navigate = useNavigate();
  return (
    <MoviePageLayout
      buttons={
        isTMDB ? (
          <Button onClick={() => toogleToLocalList(movie)}>
            {!exists ? "Adicionar a minha lista" : "Remover da minha lista"}
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button secondary onClick={() => toogleToLocalList(movie)}>
              {!exists ? "Adicionar a minha lista" : "Remover da minha lista"}
            </Button>
            <Button
              onClick={() => {
                movie?.id &&
                  navigate(
                    pagePaths.movieEditor.pathCustomParams(movie.id.toString())
                  );
              }}
            >
              Editar
            </Button>
          </div>
        )
      }
      movie={{
        title: (
          <h1 className="lg:text-6xl text-3xl  font-semibold lg:text-start text-center">
            {movie?.title}
          </h1>
        ),
        original_title: (
          <h2 className="font-light text-base lg:text-3xl lg:text-start text-center">
            {movie?.original_title}
          </h2>
        ),
        poster: movie?.poster ? (
          <Img
            loader={
              <div
                style={{
                  height: `calc(${spaceBetweenHeaderAndFooter}px - 14rem)`,
                }}
                className="aspect-[12/16] rounded-2xl flex cursor-pointer items-center justify-center dark:bg-zinc-800/50 border dark:border-zinc-700 border-zinc-400 bg-zinc-50/50"
              >
                <Spinner />
              </div>
            }
            style={{
              objectFit: "cover",
              height: `calc(${spaceBetweenHeaderAndFooter}px - 14rem)`,
            }}
            className="rounded-2xl aspect-[12/16]"
            src={movie?.poster}
            alt={movie?.title}
          />
        ) : (
          <div
            style={{
              height: `calc(${spaceBetweenHeaderAndFooter}px - 14rem)`, // 2rem for padding
            }}
            className="aspect-[12/16] rounded-2xl flex items-center justify-center dark:bg-zinc-800/50 border dark:border-zinc-700 border-zinc-400 bg-zinc-50/50"
          >
            <p className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
              Sem imagem disponível
            </p>
          </div>
        ),
        backdrop: movie?.backdrop,
        subtitle: <p className="italic">{movie?.subtitle}</p>,
        synopsis: <p>{movie?.synopsis}</p>,
        genre: (
          <ul className="flex flex-wrap gap-2">
            {movie?.genre?.map((g) => (
              <li
                className="p-2 text-purple-50 dark:text-purple-200 px-3 uppercase font-bold text-sm border dark:border-purple-950 border-purple-700 bg-purple-600 dark:bg-purple-800/30 rounded-full"
                key={g.id}
              >
                {g.name}
              </li>
            ))}
          </ul>
        ),
        popularity: (
          <>
            <p className="font-bold lg:text-base text-sm uppercase dark:text-white/60 text-black/60">
              {"Popularidade"}
            </p>
            <p>{movie?.popularity}</p>
          </>
        ),
        vote_count: (
          <>
            <p className="font-bold lg:text-base text-sm uppercase dark:text-white/60 text-black/60">
              {"Votos"}
            </p>
            <p>{movie?.vote_count}</p>
          </>
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
          <>
            <p className="font-bold lg:text-base text-sm uppercase dark:text-white/60 text-black/60">
              {"Data de Lançamento"}
            </p>
            <p>{movie?.release_date?.toLocaleDateString()}</p>
          </>
        ),
        duration: (
          <>
            <p className="font-bold lg:text-base text-sm uppercase dark:text-white/60 text-black/60">
              {"Duração"}
            </p>
            <p>{movie?.duration} min</p>
          </>
        ),
        situation: (
          <>
            <p className="font-bold lg:text-base text-sm uppercase dark:text-white/60 text-black/60">
              {"Situação"}
            </p>
            <p>{movie?.situation}</p>
          </>
        ),
        language: (
          <>
            <p className="font-bold lg:text-base text-sm uppercase dark:text-white/60 text-black/60">
              {"Linguagem"}
            </p>
            <p>{movie?.language}</p>
          </>
        ),
        budget: (
          <>
            <p className="font-bold lg:text-base text-sm uppercase dark:text-white/60 text-black/60">
              {"Orçamento"}
            </p>
            <p>{formatToCurrency(movie?.budget)}</p>
          </>
        ),
        revenue: (
          <>
            <p className="font-bold lg:text-base text-sm uppercase dark:text-white/60 text-black/60">
              {"Receita"}
            </p>
            <p>{formatToCurrency(movie?.revenue)}</p>
          </>
        ),
        profit: (
          <>
            <p className="font-bold lg:text-base text-sm uppercase dark:text-white/60 text-black/60">
              {"Lucro"}
            </p>
            <p>{formatToCurrency(movie?.profit)}</p>
          </>
        ),
        trailer: movie?.trailer && (
          <iframe
            className="rounded-2xl aspect-[16/9] lg:h-[70vh] xl:w-auto w-full max-w-[96vw]"
            src={movie.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
      }}
    />
  );
};

const ProviderWrapper = () => {
  return (
    <DetailsPageProvider>
      <PageTransitionSlide className="items-center justify-center flex w-full">
        <MovieDetailsPage />
      </PageTransitionSlide>
    </DetailsPageProvider>
  );
};

export default ProviderWrapper;
