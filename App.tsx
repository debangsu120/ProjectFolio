import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './src/layouts/RootLayout';
import HomePage from './src/pages/Home';
import ProjectsPage from './src/pages/Projects';
import ProjectDetailPage from './src/pages/ProjectDetail';
import TechStackPage from './src/pages/TechStack';
import ContactPage from './src/pages/Contact';
import EditorPage from './src/pages/Editor';
import NotFoundPage from './src/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:slug', element: <ProjectDetailPage /> },
      { path: 'tech', element: <TechStackPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'editor', element: <EditorPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}