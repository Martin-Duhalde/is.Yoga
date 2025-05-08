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
      throw new Error(errorText || `Error ${response.status}`);
    }

    const loginResponseDto = await response.json(); // o response.text() si tu backend lo devuelve
    //console.log("Respuesta del servidor 1:", jsonResponse); // Verifica la respuesta del servidor

    // 🟢 Guardar token en cookie
    // Cookies.set("authToken", jsonResponse.token, {
    //   expires: 7, // opcional: duración en días
    //   secure: true, // solo en HTTPS
    //   sameSite: "Strict", // o "Lax" dependiendo del flujo
    // });

    return loginResponseDto;
  };

  const signup = async (email, password) => {
    try {
      const res = await loginUser(email, password);
      setUser(res);
      //setUser(res.data); // Actualiza el estado del usuario con la respuesta del servidor
      console.log("Respuesta del servidor 2:", res); // Verifica la respuesta del servidor

      return res;

      //     loginUser(email, password).then((response) => {
      //     console.log("Respuesta del servidor:", response); // Verifica la respuesta del servidor
      //   });
      //   const userCredential = await createUserWithEmailAndPassword(
      //     auth,
      //     email,
      //     password
      //   );
      //   setUser(userCredential.user);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
