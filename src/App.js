import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Header/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Team from './pages/Team';
import VisionAndMission from "./pages/VisionAndMission"

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about/history' element={<History />} />
            <Route path='/about/team' element={<Team />} />
            <Route path='/about/vision-mission' element={<VisionAndMission />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
