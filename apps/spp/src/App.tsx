import { AppContext } from "./context";
import AppRoutes from "./routes/routes";
import { TRPCContext } from "./trpc/context";

function App() {
  return (
    <TRPCContext>
      {AppContext.reduce((acc, Context) => {
        return <Context>{acc}</Context>;
      }, <AppRoutes />)}
    </TRPCContext>
  );
}

export default App;
