// src/pages/ProjectDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return <div className="p-4">Project Detail Page for: {slug}</div>;
};

export default ProjectDetailPage;