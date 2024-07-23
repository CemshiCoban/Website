import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css'

import Aside from './components/sidebar/Aside';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/SkillPage/Services';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';

const App: React.FC = () => {
  return (
    <Router>
      <div className="main-container">
        <Aside/>
        <div className='main content'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />       
            <Route path="/skills" element={<Services/>} />         
            <Route path="/contact" element={<Contact/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
