import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       setUser(user);
  //       setLoading(false);
  //     });

  //     return () => unsubscribe();
  //   }, []);
  const loginUser = async (email, password) => {
    const payload = {
      email: email, //"jane.doe@example.com",
      password: password, ///"P@ssw0rd",
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

      const loginResponseDto = await response.json(); // o response.text() si tu backend lo devuelve

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

  const signup = async (email, password) => {
    // try {
    const res = await loginUser(email, password);
    setUser(res);
    return res;
    // } catch (error) {
    //   console.error("Error signing up:", error);
    // }
  };

  return (
    <AuthContext.Provider value={{ user, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
