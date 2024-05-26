import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
    <center>
      <Analytics></Analytics>
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
