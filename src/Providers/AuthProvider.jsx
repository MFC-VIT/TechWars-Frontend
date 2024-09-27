import PropTypes from "prop-types"
import React, { useEffect, createContext, useState } from "react"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
  const navigate = useNavigate();
  const [ token, setToken ] = useState("");

  useEffect(()=>{
    const token = Cookies.get("token");
    if (!token) {
      return navigate("/");
    }
    setToken(token);
  }, [navigate])

  return <AuthContext.Provider value={token}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => React.useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.func
}