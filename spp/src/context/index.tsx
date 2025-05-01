import { AuthProvider } from "./Auth";
import { HeaderProvider } from "./headerContext";
import { ThemeProvider } from "./Theme";

export const AppContext = [ThemeProvider, AuthProvider, HeaderProvider];
