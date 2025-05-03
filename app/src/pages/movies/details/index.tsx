import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import styled from "styled-components";
import { useDimensionsHelperContext } from "../../../context/DimensionsHelperContext";
import { useWindowDimensions } from "../../../hooks/useWindowSize";
import { useTRPC } from "../../../trpc/utils";
import { Button } from "../../components/Button";
import { PageTransitionSlide } from "../../components/PageTransitionWrapper";
import { Background } from "../../suportPages/layout/background";
import { useMoviesContext } from "../context";
import RateCircle from "../library/components/poster/RateCircle";
import { DetailsPageProvider, useDetailsPageContext } from "./context";
import { MovieDetailsProps } from "./interfaces";

const DetailsWrapper = styled.div.attrs({
  className:
    "dark:bg-zinc-800/50 border dark:border-zinc-700 border-zinc-400 bg-zinc-50/50 p-4 flex flex-col gap-2 rounded-xl w-fit h-fit",
})``;

const DetailsCardWrapper = styled.div.attrs({
  className:
    "dark:bg-zinc-800/50 border dark:border-zinc-700 border-zinc-400 bg-zinc-50/50 lg:p-4 p-2 flex flex-col gap-2 rounded-xl w-full h-fit backdrop-blur-xs",
})``;

const formatToCurrency = (value?: number | null) => {
  if (!value) return null;
  //like this $135M and so
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "USD",
    notation: "compact",
  }).format(value);
};

const DetailsCard = ({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) => {
  return (
    <DetailsCardWrapper>
      <p className="font-bold lg:text-base text-sm uppercase dark:text-white/60 text-black/60">
        {label}
      </p>
      <p>{value}</p>
    </DetailsCardWrapper>
  );
};

const BaseDetailsPageWebLayout = ({ movie }: { movie: MovieDetailsProps }) => {
  const { spaceBetweenHeaderAndFooter } = useDimensionsHelperContext();
  const { isTMDB } = useDetailsPageContext();

  const trpc = useTRPC();
  const { mutateAsync: existsMovie, data: exists } = useMutation(
    trpc.movies.existsByName.mutationOptions()
  );
  const { addToLocalList, pending } = useMoviesContext({});

  useEffect(() => {
    existsMovie(movie.title);
  }, [pending]);

  return (
    <div className="overflow-auto flex flex-col gap-3 h-fit">
      <div className="flex flex-col gap-4 h-full w-full">
        <title>{movie.title}</title>

        <div className="flex gap-4 items-center justify-between">
          <div className="text-black dark:text-white">
            <h1 className="text-5xl font-semibold ">{movie.title}</h1>
            <h2 className="font-light text-xl">{movie.original_title}</h2>
          </div>
          <div>
            {isTMDB && (
              <Button onClick={() => addToLocalList(movie)}>
                {exists ? "Adicionar a minha lista" : "Remover da minha lista"}
              </Button>
            )}
          </div>
        </div>
        <div
          style={{
            width: "-webkit-fill-available",
            height: "-webkit-fill-available",
          }}
          className="flex lg:flex-row flex-col gap-4 text-black dark:text-white"
        >
          {movie.poster ? (
            <img
              style={{
                objectFit: "cover",
                height: `calc(${spaceBetweenHeaderAndFooter}px - 12rem)`, // 2rem for padding
              }}
              className="rounded-2xl"
              src={movie.poster}
              alt={movie.title}
            />
          ) : (
            <div className="w-full rounded-2xl h-full flex items-center justify-center">
              <p className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
                Sem imagem disponível
              </p>
            </div>
          )}
          <div className="flex-[1] flex flex-col h-full justify-between">
            <div className="flex flex-col gap-4 ">
              <p className="italic">{movie.subtitle}</p>
              <DetailsCardWrapper className="w-full ">
                <p className="font-bold uppercase dark:text-white/80 text-black/60">
                  Sinopse
                </p>
                <p>{movie.synopsis}</p>
              </DetailsCardWrapper>
            </div>
            <DetailsCardWrapper className="w-full ">
              <p className="font-bold dark:text-white/80 text-black/60">
                Gêneros
              </p>
              <ul className="flex flex-wrap gap-2">
                {movie.genre?.map((g) => (
                  <li
                    className="p-2 text-purple-50 dark:text-purple-200 px-3 uppercase font-bold text-sm border dark:border-purple-950 border-purple-700 bg-purple-600 dark:bg-purple-800/30 rounded-full"
                    key={g.id}
                  >
                    {g.name}
                  </li>
                ))}
              </ul>
            </DetailsCardWrapper>
          </div>
          <DetailsWrapper className="flex-[1] flex h-full">
            <div className="flex gap-4 items-center justify-between">
              <DetailsCard
                label="Popularidade"
                value={movie.popularity.toString()}
              />
              <DetailsCard label="Votos" value={movie.vote_count.toString()} />
              <div className="relative h-fit flex items-center justify-center">
                <RateCircle
                  vote_average={movie.vote_average}
                  className="!w-28 !text-xl"
                  textClassName="!text-2xl"
                  porcentClassName="!text-base"
                />
              </div>
            </div>
            <div className="flex gap-4 items-center justify-between">
              <DetailsCard
                label="Data de Lançamento"
                value={movie.release_date?.toLocaleDateString()}
              />
              <DetailsCard label="Duração" value={`${movie.duration} min`} />
            </div>
            <div className="flex gap-4 items-center justify-between">
              <DetailsCard label="Situação" value={movie.situation} />
              <DetailsCard label="Linguagem" value={movie.language} />
            </div>
            <div className="flex gap-4 items-center justify-between">
              <DetailsCard
                label="Orçamento"
                value={formatToCurrency(movie.budget)}
              />
              <DetailsCard
                label="Receita"
                value={formatToCurrency(movie.revenue)}
              />
              <DetailsCard
                label="Lucro"
                value={formatToCurrency(movie.profit)}
              />
            </div>
          </DetailsWrapper>
        </div>
      </div>
      {movie.trailer && (
        <div className="flex w-full items-center justify-center">
          <iframe
            className="rounded-2xl aspect-[16/9] h-[70vh]"
            src={movie.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

const BaseDetailsPageMobileLayout = ({
  movie,
}: {
  movie: MovieDetailsProps;
}) => {
  const { spaceBetweenHeaderAndFooter } = useDimensionsHelperContext();
  const { isTMDB } = useDetailsPageContext();
  const { addToLocalList } = useMoviesContext({});
  const trpc = useTRPC();
  const { mutateAsync: existsMovie, data: exists } = useMutation(
    trpc.movies.exists.mutationOptions()
  );
  useEffect(() => {
    existsMovie(movie.id);
  }, []);
  return (
    <div className="overflow-auto flex flex-col gap-4 h-full w-full">
      <title>{movie.title}</title>

      <div
        style={{
          width: "-webkit-fill-available",
          height: "-webkit-fill-available",
        }}
        className="flex lg:flex-row flex-col gap-4 text-black dark:text-white"
      >
        {movie.poster ? (
          <img
            style={{
              objectFit: "cover",
              height: `calc(${spaceBetweenHeaderAndFooter}px - 12rem)`, // 2rem for padding
            }}
            className="rounded-2xl"
            src={movie.poster}
            alt={movie.title}
          />
        ) : (
          <div className="w-full rounded-2xl h-full flex items-center justify-center">
            <p className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
              Sem imagem disponível
            </p>
          </div>
        )}
        <div className="flex w-full items-center justify-center">
          {isTMDB && (
            <Button onClick={() => addToLocalList(movie)}>
              {exists ? "Adicionar a minha lista" : "Remover da minha lista"}
            </Button>
          )}
        </div>

        <div className="text-black dark:text-white flex items-center flex-col">
          <h1 className="lg:text-5xl text-3xl font-semibold text-center">
            {movie.title}
          </h1>
          <h2 className="font-light text-base lg:text-xl">
            {movie.original_title}
          </h2>
        </div>
        <div className="flex-[1] flex flex-col h-full justify-between gap-4">
          <div className="flex flex-col gap-4 ">
            <p className="italic">{movie.subtitle}</p>
            <DetailsCardWrapper className="w-full ">
              <p className="font-bold uppercase dark:text-white/80 text-black/60">
                Sinopse
              </p>
              <p>{movie.synopsis}</p>
            </DetailsCardWrapper>
          </div>
          <DetailsCardWrapper className="w-full ">
            <p className="font-bold dark:text-white/80 text-black/60">
              Gêneros
            </p>
            <ul className="flex flex-wrap gap-2">
              {movie.genre?.map((g) => (
                <li
                  className="p-2 text-purple-50 dark:text-purple-200 px-3 uppercase font-bold text-sm border dark:border-purple-950 border-purple-700 bg-purple-600 dark:bg-purple-800/30 rounded-full"
                  key={g.id}
                >
                  {g.name}
                </li>
              ))}
            </ul>
          </DetailsCardWrapper>
        </div>
        <div className="flex-[1] gap-2 flex-col flex h-full">
          <div className="flex gap-2 items-center justify-between">
            <DetailsCard
              label="Popularidade"
              value={movie.popularity.toString()}
            />
            <DetailsCard label="Votos" value={movie.vote_count.toString()} />
            <div className="relative h-fit flex items-center justify-center">
              <RateCircle
                vote_average={movie.vote_average}
                className="!w-28 !text-xl"
                textClassName="!text-2xl"
                porcentClassName="!text-base"
              />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <DetailsCard
              label="Data de Lançamento"
              value={movie.release_date?.toLocaleDateString()}
            />
            <DetailsCard label="Duração" value={`${movie.duration} min`} />
          </div>
          <div className="flex gap-2 items-center justify-between">
            <DetailsCard label="Situação" value={movie.situation} />
            <DetailsCard label="Linguagem" value={movie.language} />
          </div>
          <div className="flex gap-2 items-center justify-between">
            <DetailsCard
              label="Orçamento"
              value={formatToCurrency(movie.budget)}
            />
            <DetailsCard
              label="Receita"
              value={formatToCurrency(movie.revenue)}
            />
            <DetailsCard label="Lucro" value={formatToCurrency(movie.profit)} />
          </div>
        </div>
        {movie.trailer && (
          <div className="flex w-full items-center justify-center">
            <iframe
              className="rounded-2xl aspect-[16/9] w-full"
              src={movie.trailer}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export const BaseDetailsPageLayout = () => {
  const {
    dimensions: { width },
  } = useWindowDimensions();
  const isMobile = width < 768; // Adjust this value based on your design breakpoints
  const { spaceBetweenHeaderAndFooter } = useDimensionsHelperContext();
  const { movie } = useDetailsPageContext();

  if (!movie) return null;

  return (
    <Background
      image={movie.backdrop}
      className="border border-black/30 dark:border-white/20 rounded-2xl w-full lg:p-4 p-2 lg:py-6 "
      style={{
        height: spaceBetweenHeaderAndFooter - 48,
      }}
    >
      {isMobile ? (
        <BaseDetailsPageMobileLayout movie={movie} />
      ) : (
        <BaseDetailsPageWebLayout movie={movie} />
      )}
    </Background>
  );
};

const MovieDetailsPage = () => {
  return (
    <DetailsPageProvider>
      <PageTransitionSlide className="items-center justify-center flex w-full">
        <BaseDetailsPageLayout />
      </PageTransitionSlide>
    </DetailsPageProvider>
  );
};

export default MovieDetailsPage;
