import { AnimatePresence } from "motion/react";
import { lazy, useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";

import { useTheme } from "../context/Theme";
import Layout from "../pages/suportPages/layout";
import { Background } from "../pages/suportPages/layout/background";
import Footer from "../pages/suportPages/layout/footer";
import Header from "../pages/suportPages/layout/header";
import { pagePaths } from "./paths";

const SignInPage = lazy(() => import("../pages/InOut/signIn"));
const LoginPage = lazy(() => import("../pages/InOut/login"));
const NotFoundPage = lazy(() => import("../pages/suportPages/notFound"));
const LibraryPage = lazy(() => import("../pages/library"));

const AnimatedRoutes = () => {
  const location = useLocation();
  const isNotFoundPage = useMemo(
    () => !Object.values(pagePaths).includes(location.pathname),
    [location.pathname]
  );
  const { setupTheme } = useTheme();

  useEffect(() => {
    setupTheme();
  }, []);
  return (
    <>
      {!isNotFoundPage && <Header />}
      <Background>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path={pagePaths.home} element={<Layout />}>
              <Route path={pagePaths.signIn} element={<SignInPage />} />
              <Route path={pagePaths.logIn} element={<LoginPage />} />
              <Route path={pagePaths.library} element={<LibraryPage />} />
              <Route path="*" element={<NotFoundPage />} />
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
