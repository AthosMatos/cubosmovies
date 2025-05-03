import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../../../../../context/Auth";
import { pagePaths } from "../../../../../../routes/paths";
import { Button } from "../../../../../components/Button";

const LogInOut = () => {
  const location = useLocation();

  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const isSignInPage = useMemo(() => {
    return location.pathname === pagePaths.signIn.path;
  }, [location.pathname]);

  const isLogInPage = useMemo(() => {
    return location.pathname === pagePaths.logIn.path;
  }, [location.pathname]);

  const isForgotPassPage = useMemo(() => {
    return location.pathname === pagePaths.forgotPass.path;
  }, [location.pathname]);

  const onClick = () => {
    if (isSignInPage) navigate(pagePaths.logIn.path);
    else {
      if (token || isForgotPassPage) {
        if (token) logout();
        navigate(pagePaths.logIn.path);
      } else if (isLogInPage) {
        navigate(pagePaths.signIn.path);
      }
    }
  };

  const buttonLabel = useMemo(() => {
    if (isLogInPage) {
      return "SignIn";
    } else if (isSignInPage) {
      return "LogIn";
    } else if (isForgotPassPage) {
      return "LogIn";
    } else {
      return "LogOut";
    }
  }, [isSignInPage, isLogInPage, isForgotPassPage, token]);

  return (
    <Button className="w-20" onClick={onClick}>
      {buttonLabel}
    </Button>
  );
};

export default LogInOut;
