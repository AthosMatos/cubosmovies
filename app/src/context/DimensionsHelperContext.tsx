import { createContext, useContext, useEffect, useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowSize";

export const headerId = "cubosappheader";
export const footerId = "cubosappfooter";
interface DimensionsHelperContextType {
  headerHeight: number;
  footerHeight: number;
  spaceBetweenHeaderAndFooter: number;
  screenHeight: number;
}

const DimensionsHelperContext = createContext<
  DimensionsHelperContextType | undefined
>(undefined);

export const DimensionsHelperProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //tried with useMemo but it was not working as expected
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [spaceBetweenHeaderAndFooter, setSpaceBetweenHeaderAndFooter] =
    useState(0);
  const {
    dimensions: { height },
  } = useWindowDimensions();

  useEffect(() => {
    const header = document.getElementById(headerId);

    if (header) {
      const { height } = header.getBoundingClientRect();
      setHeaderHeight(height);
    }

    const footer = document.getElementById(footerId);

    if (footer) {
      const { height } = footer.getBoundingClientRect();
      setFooterHeight(height);
    }
  }, []);

  useEffect(() => {
    if (headerHeight && footerHeight) {
      const space = height - headerHeight - footerHeight;
      setSpaceBetweenHeaderAndFooter(space);
    }
  }, [headerHeight, footerHeight, height]);

  return (
    <DimensionsHelperContext.Provider
      value={{
        headerHeight,
        footerHeight,
        spaceBetweenHeaderAndFooter,
        screenHeight: height,
      }}
    >
      {children}
    </DimensionsHelperContext.Provider>
  );
};

export const useDimensionsHelperContext = () => {
  const context = useContext(DimensionsHelperContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};
