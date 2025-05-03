import { Suspense } from "react";
import { Outlet } from "react-router";

import LoadingPage from "../loading";

function Layout() {
  return (
    <div className="flex flex-[1] p-3">
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
