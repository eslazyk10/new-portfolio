import Header from "./Header";
import Home from "./Home"
import Projects from "./Projects";
import Contact from "./Contact";
import {Route} from "react-router-dom";
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
