import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../../../../../context/Auth";
import { Button } from "../../../../../components/Button";

const LogInOut = () => {
  const location = useLocation();
  const isLoginPage = useMemo(
    () => location.pathname === "/logIn",
    [location.pathname]
  );
  const isSignInPage = useMemo(
    () => location.pathname === "/signIn",
    [location.pathname]
  );
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const onClick = () => {
    if (isSignInPage) {
      navigate("/logIn", { replace: true });
    } else {
      if (token) {
        logout();
        navigate("/signIn", { replace: true });
      } else navigate("/signIn", { replace: true });
    }
  };

  const buttonLabel = useMemo(() => {
    if (isLoginPage) {
      return "SignIn";
    } else if (isSignInPage) {
      return "LogIn";
    } else {
      return "LogOut";
    }
  }, [isLoginPage, isSignInPage, token]);

  return (
    <Button className="w-20" onClick={onClick}>
      {buttonLabel}
    </Button>
  );
};

export default LogInOut;
