import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import MemoizedLoginPage from './pages/LoginPage';

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

  // return (
  //   <>
  //     <Layout style={layoutStyle}>
  //       <AppHeader />
  //       <AppContent />
  //     </Layout>
  //   </>
  // )

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login/" element={<MemoizedLoginPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}


export default App
