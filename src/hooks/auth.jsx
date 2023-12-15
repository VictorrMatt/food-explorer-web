import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

import { api } from "../services/api";

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        "/sessions",
        { email, password },
        { withCredentials: true }
      );

      const weHaveName = response.data.user.name;

      if (weHaveName) {
        const { user } = response.data;
        localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
        setData({ user });
      } else {
        return alert("Nenhum usuário encontrado na resposta.");
      }
    } catch (error) {
      let message = error.response
        ? error.response.data.message
        : "Não foi possível cadastrar o usuário.";
      return alert(message);
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");

    if (user) {
      setData({
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
