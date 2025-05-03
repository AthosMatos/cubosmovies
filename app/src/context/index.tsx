import { AuthProvider } from "./Auth";
import { DimensionsHelperProvider } from "./DimensionsHelperContext";
import { ThemeProvider } from "./Theme";

export const AppContext = [
  ThemeProvider,
  AuthProvider,
  DimensionsHelperProvider,
];
