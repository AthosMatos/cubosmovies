import { AnimatePresence } from "motion/react";
import { useEffect, useMemo } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router";

import { useAuth } from "../context/Auth";
import { useTheme } from "../context/Theme";
import Layout from "../pages/suportPages/layout";
import { Background } from "../pages/suportPages/layout/background";
import Footer from "../pages/suportPages/layout/footer";
import Header from "../pages/suportPages/layout/header";
import { pagePaths, safeRoutes } from "./paths";

const AnimatedRoutes = () => {
  const location = useLocation();
  const isNotFoundPage = useMemo(
    () =>
      !Object.values(pagePaths).find(
        (pp) => pp.path === location.pathname || pp.path.includes("/details")
      ),
    [location.pathname]
  );
  const { setupTheme } = useTheme();

  useEffect(() => {
    setupTheme();
  }, []);

  const { verifyToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = verifyToken();

    if (hasToken) {
      if (location.pathname == pagePaths.home.path) {
        navigate(pagePaths.library.path);
      } else if (
        Object.values(pagePaths).find((pp) => {
          if (location.pathname.includes("/details")) return true;
          return pp.path === location.pathname;
        })
      ) {
        return;
      } else navigate(pagePaths.library.path);
    } else if (!safeRoutes.includes(location.pathname)) {
      navigate(pagePaths.logIn.path);
    }
  }, []);
  return (
    <>
      {!isNotFoundPage && <Header />}
      <Background>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path={pagePaths.home.path} element={<Layout />}>
              {Object.values(pagePaths).map((pp) => {
                if (pp.path === pagePaths.home.path || !pp.element) return null;
                return (
                  <Route
                    key={pp.path}
                    path={pp.path}
                    element={<pp.element />}
                  />
                );
              })}
            </Route>
          </Routes>
        </AnimatePresence>
      </Background>
      {!isNotFoundPage && <Footer />}
    </>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default AppRoutes;
