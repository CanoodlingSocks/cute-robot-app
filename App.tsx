import React from 'react';
import { AdminProvider } from './utils/AdminContext';
import Navigation from './Navigation';

const App = () => {
  return (
    <AdminProvider>
      <Navigation />
    </AdminProvider>
  );
};

export default App;
