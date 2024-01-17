import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = useCallback(async (data) => {
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  }, []);

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:4000/auth/success", {
          // headers: {
          // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          // "Access-Control-Allow-Origin": "*",
          // },
        })
        .then((res) => {
          login(res.data);
        })
        .catch((err) => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          navigate("/login");
          console.log(err);
        });
    })();
  }, [login, navigate]);

  const logout = useCallback(async () => {
    await axios
      .post("http://localhost:4000/logout", {
        withCredentials: false,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(() => navigate("/login"));
  }, [navigate]);

  const value = useMemo(
    () => ({
      login,
      logout,
    }),
    [login, logout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
