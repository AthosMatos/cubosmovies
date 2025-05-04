import { MoviePageLayoutProps } from "../interfaces";
import { DetailsCardWrapper, DetailsWrapper } from "../styled";

export const MoviePageWebLayout = (props: MoviePageLayoutProps) => {
  const { movie, form } = props;

  return (
    <div className="overflow-auto flex flex-col gap-3 h-fit">
      <div className="flex flex-col gap-4 h-full w-full">
        <div className="flex gap-4 items-center justify-between">
          <div className="text-black flex-col flex dark:text-white">
            {movie.title}
            {movie.original_title}
          </div>
          <div>{props.buttons}</div>
        </div>
        <div
          style={{
            width: "-webkit-fill-available",
            height: "-webkit-fill-available",
          }}
          className="flex lg:flex-row flex-col gap-4 text-black dark:text-white"
        >
          {movie.poster}

          <div className="flex-[1] flex flex-col h-full justify-between">
            <div className="flex flex-col gap-4 ">
              {movie.subtitle}
              <DetailsCardWrapper className="w-full ">
                <p className="font-bold uppercase dark:text-white/80 text-black/60">
                  Sinopse
                </p>
                {movie.synopsis}
              </DetailsCardWrapper>
            </div>
            <DetailsCardWrapper className="w-full ">
              <p className="font-bold dark:text-white/80 text-black/60">
                Gêneros
              </p>
              {movie.genre}
            </DetailsCardWrapper>
          </div>
          <DetailsWrapper className="flex-[1] flex h-full">
            <div className="flex gap-4 items-center justify-between">
              <DetailsCardWrapper>{movie.popularity}</DetailsCardWrapper>
              <DetailsCardWrapper>{movie.vote_count}</DetailsCardWrapper>
              <div className="relative h-fit flex items-center justify-center">
                {movie.vote_average}
              </div>
            </div>
            <div className="flex gap-4 items-center justify-between">
              <DetailsCardWrapper>{movie.release_date}</DetailsCardWrapper>
              <DetailsCardWrapper>{movie.duration}</DetailsCardWrapper>
            </div>
            <div className="flex gap-4 items-center justify-between">
              <DetailsCardWrapper>{movie.situation}</DetailsCardWrapper>
              <DetailsCardWrapper>{movie.language}</DetailsCardWrapper>
            </div>
            <div className="flex gap-4 items-center justify-between">
              <DetailsCardWrapper>{movie.budget}</DetailsCardWrapper>
              <DetailsCardWrapper>{movie.revenue}</DetailsCardWrapper>
              <DetailsCardWrapper>{movie.profit}</DetailsCardWrapper>
            </div>
          </DetailsWrapper>
        </div>
      </div>
      {movie.trailer && (
        <div className="flex w-full items-center justify-center">
          {movie.trailer}
        </div>
      )}
    </div>
  );
};
