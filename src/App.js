import Header from "./Header";
import Home from "./Home"
import Projects from "./Projects";
import Contact from "./Contact";
import {Route, Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/home" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
