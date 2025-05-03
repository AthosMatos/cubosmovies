import { useNavigate } from "react-router";
import CubeLogo from "../../../../assets/CubeLogo";
import { CubosLogo } from "../../../../assets/CubosLogo";
import { headerId } from "../../../../context/DimensionsHelperContext";
import { useWindowDimensions } from "../../../../hooks/useWindowSize";
import LogInOut from "./actions/logInOut";

import { pagePaths } from "../../../../routes/paths";
import ToogleTheme from "./actions/toogleTheme";

const Header = () => {
  const {
    dimensions: { width },
  } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <div
      id={headerId}
      style={{
        width: "-webkit-fill-available",
      }}
      className="top-0 z-10 fixed justify-between select-none rounded-xl p-4 font-semibold dark:border-zinc-800 border-zinc-300 border m-2 h-16 text-xl bg-zinc-200 dark:bg-zinc-900 text-black dark:text-white flex items-center gap-3 px-4"
    >
      <div
        onClick={() => navigate(pagePaths.library.path)}
        className="w-fit h-full flex items-center gap-2 cursor-pointer"
      >
        {width > 768 ? (
          <CubosLogo className="h-full dark:fill-white fill-black" />
        ) : (
          <CubeLogo className="h-full dark:fill-white fill-black" />
        )}
        Movies
      </div>
      <div className="flex items-center gap-2">
        <ToogleTheme />
        <LogInOut />
      </div>
    </div>
  );
};

export default Header;
