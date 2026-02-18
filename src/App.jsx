
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
    </div>
  );
}

export default App;