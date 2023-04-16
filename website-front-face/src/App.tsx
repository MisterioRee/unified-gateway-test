import React from 'react';
import MainLayout from 'layouts/MainLayout';
import AppRoutes from 'routes/AppRoutes';
import 'antd/dist/antd.css';
import '../public/styles.css';

const App: React.FC = () => {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
};

export default App;
