import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans antialiased">
      <Header />
      <main>
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default RootLayout;