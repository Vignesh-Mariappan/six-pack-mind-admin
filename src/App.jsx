import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import MemoizedLoginPage from './pages/LoginPage';
import { ConfigProvider, theme } from 'antd';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        setUser(oldUser => currentUser)
      } else {
        // User is signed out
        setUser(null)
      }
    });

    return () => unsubscribeAuth && unsubscribeAuth();
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

function App() {

  return (
    <ConfigProvider
      theme={{
        // 1. Use dark algorithm
        algorithm: theme.darkAlgorithm,
      }}
    >
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login/" element={<MemoizedLoginPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </ConfigProvider>
    
  )
}


export default App
