/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const test = "Ok";

    const authInfo = {
        test
    }


  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
