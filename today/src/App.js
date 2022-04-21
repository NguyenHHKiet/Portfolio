import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';




function App() {

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/project' element={<Projects/>} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />

    </Router>
  );
}

export default App;
