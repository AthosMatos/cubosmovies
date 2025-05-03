import { useDimensionsHelperContext } from "../../../context/DimensionsHelperContext";
import { PageTransitionSlide } from "../../components/PageTransitionWrapper";

import { LibraryPageProvider } from "./context";
import LibraryHeader from "./sections/header";
import LibraryPageList from "./sections/list";
import LibrayPageNav from "./sections/nav";

const LibraryPage = () => {
  const { headerHeight } = useDimensionsHelperContext();

  return (
    <LibraryPageProvider>
      <PageTransitionSlide
        style={{
          marginTop: `calc(${headerHeight}px + 0.5rem)`,
        }}
        className="w-full h-full overflow-auto items-end flex flex-col gap-3"
      >
        <LibraryHeader />
        <LibraryPageList />
        <LibrayPageNav />
      </PageTransitionSlide>
    </LibraryPageProvider>
  );
};

export default LibraryPage;
