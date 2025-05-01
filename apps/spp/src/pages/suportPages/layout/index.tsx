import { Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

import { useAuth } from "../../../context/Auth";
import { pagePaths } from "../../../routes/paths";
import LoadingPage from "../loading";

function Layout() {
  const { verifyToken } = useAuth();
  const navigate = useNavigate();
  const hasToken = verifyToken();
  const location = useLocation();
  useEffect(() => {
    if (hasToken) {
      navigate(pagePaths.library, { replace: true });
    } else {
      if (
        location.pathname != pagePaths.signIn &&
        location.pathname != pagePaths.logIn
      ) {
        navigate(pagePaths.logIn, { replace: true });
      }
    }
  }, [hasToken]);
  return (
    <div className="flex flex-[1] p-3">
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
