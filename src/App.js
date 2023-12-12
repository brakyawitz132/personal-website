import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
