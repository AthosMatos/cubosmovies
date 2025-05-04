import { MoviePageLayoutProps } from "../interfaces";
import { DetailsCardWrapper } from "../styled";

export const MoviePageMobileLayout = (props: MoviePageLayoutProps) => {
  const { movie } = props;

  return (
    <div className="overflow-auto flex flex-col gap-4 h-full w-full">
      <div
        style={{
          width: "-webkit-fill-available",
          height: "-webkit-fill-available",
        }}
        className="flex flex-col gap-4 text-black dark:text-white"
      >
        {movie.poster}
        <div className="flex w-full items-center justify-center">
          {props.buttons}
        </div>

        <div className="text-black dark:text-white flex flex-col">
          {movie.title}
          {movie.original_title}
        </div>
        <div className="flex-[1] flex flex-col h-full justify-between gap-4">
          <div className="flex flex-col gap-4 ">
            {movie.subtitle}
            <DetailsCardWrapper className="w-full ">
              <p className="font-bold uppercase dark:text-white/80 text-black/60">
                Sinopse
              </p>
            </DetailsCardWrapper>
            {movie.synopsis}
          </div>
          <DetailsCardWrapper className="w-full ">
            <p className="font-bold dark:text-white/80 text-black/60">
              Gêneros
            </p>
            {movie.genre}
          </DetailsCardWrapper>
        </div>

        <div className="flex-[1] gap-2 flex-col flex h-full">
          <div className="flex gap-2 items-center justify-between">
            <DetailsCardWrapper>{movie.popularity}</DetailsCardWrapper>
            <DetailsCardWrapper>{movie.vote_count}</DetailsCardWrapper>
            <div className="relative h-fit flex items-center justify-center">
              {movie.vote_average}
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <DetailsCardWrapper>{movie.release_date}</DetailsCardWrapper>
            <DetailsCardWrapper>{movie.duration}</DetailsCardWrapper>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <DetailsCardWrapper>{movie.situation}</DetailsCardWrapper>
            <DetailsCardWrapper>{movie.language}</DetailsCardWrapper>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <DetailsCardWrapper>{movie.budget}</DetailsCardWrapper>
            <DetailsCardWrapper>{movie.revenue}</DetailsCardWrapper>
            <DetailsCardWrapper>{movie.profit}</DetailsCardWrapper>
          </div>
        </div>
        {movie.trailer && (
          <div className="flex w-full items-center justify-center">
            {movie.trailer}
          </div>
        )}
      </div>
    </div>
  );
};
