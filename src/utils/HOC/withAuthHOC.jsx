import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const WithAuthHOC = (WrappedComponent) => {
  return function AuthComponent(props) {
    const navigate = useNavigate();
    const { setLogin } = useContext(AuthContext);

    useEffect(() => {
      const isLogin = localStorage.getItem("isLogin");

      if (!isLogin) {
        setLogin(false);
        navigate("/");
      }
    }, [navigate, setLogin]);

    return <WrappedComponent {...props} />;
  };
};

export default WithAuthHOC;
