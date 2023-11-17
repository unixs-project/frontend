// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null)

  const isAuthenticated = !!authToken

  useEffect(() => {
    const storedToken = sessionStorage.getItem('authToken')

    if (storedToken) {
      setAuthToken(storedToken)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ authToken, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
