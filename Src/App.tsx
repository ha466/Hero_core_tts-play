import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { TTSStudio } from './pages/TTSStudio';
import { StoryGenerator } from './pages/StoryGenerator';
import { AdventureMode } from './pages/AdventureMode';
import { FileLibrary } from './pages/FileLibrary';
import { HardwareSettings } from './pages/HardwareSettings';
import { useEffect } from 'react';
import { initDB } from './core/storage/db';

function App() {
  useEffect(() => {
    initDB().catch(console.error);
  }, []);

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tts" element={<TTSStudio />} />
          <Route path="/story" element={<StoryGenerator />} />
          <Route path="/adventure" element={<AdventureMode />} />
          <Route path="/library" element={<FileLibrary />} />
          <Route path="/settings" element={<HardwareSettings />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
