// context/AuthProvider.jsx

import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

/// user (Example returns from the API)
/// {
///     "Id": 101,
///     "UserName": "jane_doe",
///     "Email": "jane.doe@example.com",
///     "Role": "admin",
///     "AvatarUrl": "/avatars/101.png"
/// }

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem("user")
  );
  const [loading, setLoading] = useState(true); // para controlar render

  useEffect(() => {
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const loginResponseDto = await authLogin(email, password);

      console.log("[AuthProvider] AvatarUrl = " + loginResponseDto.avatarUrl);
      setUser(loginResponseDto);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(loginResponseDto)); // 🟢 persistir
      console.log(
        "[AuthProvider] Login OK. ¡Hola " + loginResponseDto.userName + "!"
      );
      return loginResponseDto;
    } catch (error) {
      logout(); // 🧹 limpiar por si acaso

      console.log("[AuthProvider] Login failed!");
      throw error; // Re-throw the error to be handled by the caller
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("https://localhost:7060/api/Auth/logout", {
        method: "POST",
        credentials: "include", // 👈 Necesario para que la cookie sea enviada
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("[AuthProvider] Error al hacer logout:", errorText);
        throw new Error(errorText || "Error al cerrar sesión");
      }

      const result = await response.json();
      console.log("[AuthProvider] Logout OK:", result.message);
    } catch (error) {
      console.warn("[AuthProvider] Error durante logout:", error.message);
      // 🔒 Aun si hay error, limpiamos por seguridad
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem("user");
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
        credentials: "include", // 👈 Necesario para guardar la cookie devuelta
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();

        if (response.status === 401) {
          console.log(
            "[AuthProvider]  Respuesta del servidor ERROR: Credenciales inválidas"
          );
          return { error: "Credenciales inválidas" };
        } else {
          console.log("[AuthProvider] Respuesta del servidor ERROR:", response);
        }

        throw new Error(errorText || `Error ${response.status}`);
      }

      const loginResponseDto = await response.json();

      console.log(
        "[AuthProvider] Respuesta del servidor: loginResponseDto",
        loginResponseDto
      );

      // 🟢 Guardar token en cookie
      // Cookies.set("authToken", jsonResponse.token, {
      //   expires: 7, // opcional: duración en días
      //   secure: true, // solo en HTTPS
      //   sameSite: "Strict", // o "Lax" dependiendo del flujo
      // });

      return loginResponseDto;
    } catch (errorFetch) {
      // 🛑 Esto atrapa errores como ERR_CONNECTION_REFUSED
      console.log(
        "[AuthProvider] Error de red o conexión ¿ Está la API levantada ?:",
        errorFetch.message
      );
      throw new Error(
        "No se pudo conectar con el servidor. Intente más tarde. (Error de red o conexión)."
      );
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, user, isAuthenticated }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
