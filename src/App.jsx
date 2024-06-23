import { Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import AppContent from './components/AppContent/AppContent';

function App() {

  const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
  };

  return (
    <>
      <Layout style={layoutStyle}>
        <AppHeader />
        <AppContent />
      </Layout>
    </>
  )
}

export default App
