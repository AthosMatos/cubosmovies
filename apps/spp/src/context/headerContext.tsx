import { createContext, useContext, useEffect, useState } from "react";

export const headerId = "cubosappheader";

interface HeaderContextType {
  headerHeight: number;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById(headerId);
    if (header) {
      const { height } = header.getBoundingClientRect();
      setHeaderHeight(height);
    }
  }, []);

  return (
    <HeaderContext.Provider value={{ headerHeight }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};
