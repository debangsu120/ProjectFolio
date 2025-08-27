// src/layouts/RootLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      {/* Header will go here in the next step */}
      <header className="p-4 border-b">
        <p>Header Placeholder</p>
      </header>
      <main>
        <Outlet />
      </main>
      {/* Footer can go here */}
    </div>
  );
};

export default RootLayout;