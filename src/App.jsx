import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Inbox from './pages/Inbox';
import Organize from './pages/Organize';
import Projects from './pages/Projects';
import Vision from './pages/Vision';
import Knowledge from './pages/Knowledge';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="organize" element={<Organize />} />
          <Route path="projects" element={<Projects />} />
          <Route path="vision" element={<Vision />} />
          <Route path="knowledge" element={<Knowledge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
