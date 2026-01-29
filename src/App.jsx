import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Footer from './Footer';
import InteractiveGridPatternDemo from "./components/background/InteractiveGridPattern";

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import Private from './pages/Private';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Background (behind everything) */}
      <InteractiveGridPatternDemo />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/private" element={<Private />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
