import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import {Route, Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Route exact path="/projects" component={Projects} />
    </div>
  );
}

export default App;
