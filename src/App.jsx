
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path ="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;