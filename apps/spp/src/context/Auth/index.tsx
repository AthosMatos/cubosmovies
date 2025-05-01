import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { useTRPC } from "../../trpc/utils";

interface AuthContextType {
  token: string | null;
  login: {
    mutate: (email: string, password: string) => Promise<boolean>;
    isPending: boolean;
    error: string | null;
    reset: () => void;
  };
  logout: () => void;
  verifyToken: () => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const trpc = useTRPC();
  const {
    mutateAsync: login,
    isPending,
    error,
    reset: resetMutation,
  } = useMutation(trpc.auth.login.mutationOptions());

  const [token, setToken] = useState<string | null>(null);

  const verifyToken = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      return true;
    } else {
      return false;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const response = await login({ email, password });
      setToken(response.token);
      localStorage.setItem("token", response.token);
      return true;
    } catch (err) {
      console.error("Login failed", err);
      return false;
    }
  };

  const signOut = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        verifyToken,
        token,
        login: {
          mutate: signIn,
          isPending,
          error: error ? error.message : null,
          reset: () => {
            resetMutation();
            setToken(null);
            localStorage.removeItem("token");
          },
        },
        logout: signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
