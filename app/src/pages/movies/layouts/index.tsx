import { useMemo } from "react";
import { useDimensionsHelperContext } from "../../../context/DimensionsHelperContext";
import { useWindowDimensions } from "../../../hooks/useWindowSize";
import { Background } from "../../suportPages/layout/background";
import { MoviePageLayoutProps } from "./interfaces";
import { MoviePageMobileLayout } from "./mobileLayout";
import { MoviePageWebLayout } from "./webLayout";

export const MoviePageLayout = (props: MoviePageLayoutProps) => {
  const {
    dimensions: { width },
  } = useWindowDimensions();
  const isMobileOrTablet = useMemo(() => {
    if (width <= 1700) return true;
    return false;
  }, [width]);

  const { spaceBetweenHeaderAndFooter } = useDimensionsHelperContext();

  return (
    <Background
      image={props.movie?.backdrop}
      className="border border-black/30 dark:border-white/20 rounded-2xl w-full lg:p-4 p-2 lg:py-6 "
      style={{
        height: spaceBetweenHeaderAndFooter - 48,
      }}
    >
      <title>{props.pageTitle}</title>
      {isMobileOrTablet ? (
        <MoviePageMobileLayout {...props} />
      ) : (
        <MoviePageWebLayout {...props} />
      )}
    </Background>
  );
};
