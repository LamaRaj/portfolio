import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ExperienceDetail from './pages/ExperienceDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-emerald-500/40">
        <Navbar onOpenContact={() => setIsContactOpen(true)} />
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience/:id" element={<ExperienceDetail />} />
              {/* Fallback for other routes */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
