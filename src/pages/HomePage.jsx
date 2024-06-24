import { Navigate } from "react-router-dom";
import { useAuth } from "../App";
import AppContent from "../components/AppContent/AppContent";
import AppHeader from "../components/AppHeader/AppHeader";
import { Layout } from "antd";

const HomePage = () => {
  const authentication = useAuth();

  const layoutStyle = {
    overflow: 'auto',
    width: '1440px',
  };
  
  if (!authentication?.user) {
    return <Navigate to="/login/" />;
  }

  return (
    <Layout style={layoutStyle}>
      <AppHeader />
      <AppContent />
    </Layout>
  )
}

export default HomePage;