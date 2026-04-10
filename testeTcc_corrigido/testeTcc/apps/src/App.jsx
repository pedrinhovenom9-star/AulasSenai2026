import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { FavoritesProvider } from './contexts/FavoritesContext.jsx';
import { Toaster } from './components/ui/toaster';
import HomePage from './pages/HomePage.jsx';
import BusinessExplorer from './pages/BusinessExplorer.jsx';

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<BusinessExplorer />} />
        </Routes>
        <Toaster />
      </FavoritesProvider>
    </Router>
  );
}

export default App;