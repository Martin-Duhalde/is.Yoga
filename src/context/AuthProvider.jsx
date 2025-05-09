// context/AuthProvider.jsx

import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email, password) => {
    try {
      const loginResponseDto = await authLogin(email, password);
      setUser(loginResponseDto);
      setIsAuthenticated(true);
      return loginResponseDto;
    } catch (error) {
      console.error("Error signing up:", error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const authLogin = async (email, password) => {
    const payload = {
      email: email,
      password: password,
    };
    try {
      const response = await fetch("https://localhost:7060/api/Auth/login", {
        method: "POST",
        headers: {
          Accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();

        if (response.status === 401) {
          console.log("Respuesta del servidor ERROR1: Credenciales inválidas");
          return { error: "Credenciales inválidas" };
        } else {
          console.log("Respuesta del servidor ERROR2:", response);
        }

        throw new Error(errorText || `Error ${response.status}`);
      }

      const loginResponseDto = await response.json();
      // 🟢 Guardar token en cookie
      // Cookies.set("authToken", jsonResponse.token, {
      //   expires: 7, // opcional: duración en días
      //   secure: true, // solo en HTTPS
      //   sameSite: "Strict", // o "Lax" dependiendo del flujo
      // });

      return loginResponseDto;
    } catch (errorFetch) {
      // 🛑 Esto atrapa errores como ERR_CONNECTION_REFUSED
      console.error(
        "Error de red o conexión ¿ Está la API levantada ?:",
        errorFetch.message
      );
      throw new Error(
        "No se pudo conectar con el servidor. Intente más tarde. (Error de red o conexión)"
      );
    }
  };

  return (
    <AuthContext.Provider value={{ login, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
