import React from 'react'
import AppHeader from './AppHeader/AppHeader'
import AppContent from './AppContent/AppContent'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const layoutStyle = {
        overflow: 'hidden',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
      };

  return (
    <Layout style={layoutStyle}>
        <AppHeader />
        <Outlet />
    </Layout>
  )
}

export default Layout