

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './components/navbar';
import Carousal from "./components/Carousal";
import About from "./components/about";
import Service from "./components/service";
import Portifilo from "./components/portifilo";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {

  return (
  <div>
    <Navbar></Navbar>
    <Carousal></Carousal>
    <About></About>
    <Service></Service>
    <Portifilo></Portifilo>
    <Team></Team>
    <Contact></Contact>
    <Footer></Footer>
    

</div>

  )
}

export default App
