/* 
 <Route path={pagePaths.signIn.path} element={<SignInPage />} />
  <Route path={pagePaths.logIn.path} element={<LoginPage />} />
  <Route path={pagePaths.library.path} element={<LibraryPage />} />
  <Route path={pagePaths.forgotPass} element={<ForgotPassPage />} />
  <Route path={pagePaths.details} element={<MovieDetailsPage />} />
  <Route path="*" element={<NotFoundPage />} />
*/

import { lazy } from "react";

export const pagePaths = {
  signIn: {
    path: "/signIn",
    element: lazy(() => import("../pages/InOut/signIn")),
  },
  logIn: {
    path: "/login",
    element: lazy(() => import("../pages/InOut/login")),
  },
  forgotPass: {
    path: "/forgotPass",
    element: lazy(() => import("../pages/InOut/forgotPass")),
  },
  home: {
    path: "/",
    element: null,
  },
  notFound: {
    path: "*",
    element: lazy(() => import("../pages/suportPages/notFound")),
  },
  library: {
    path: "/library",
    element: lazy(() => import("../pages/movies/library")),
  },
  details: {
    path: "/details/:id",
    pathCustomParams: (id: string) => `/details/${id}`,
    element: lazy(() => import("../pages/movies/details")),
  },
  detailsTMDB: {
    path: "/details-tmdb/:id",
    pathCustomParams: (id: string) => `/details-tmdb/${id}`,
    element: lazy(() => import("../pages/movies/details")),
  },
};

export const safeRoutes = [
  pagePaths.signIn.path,
  pagePaths.logIn.path,
  pagePaths.forgotPass,
];
