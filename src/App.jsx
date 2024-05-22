import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <>
    <center>
    <Navbar></Navbar>
    <div className="content">
    <Home/>
    <About/>

    <Projects></Projects>
    <Contact></Contact>
    </div>
    </center>

    </>
  );
}

export default App;
