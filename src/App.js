import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Products from './Component/Products';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <div >
 <Navbar/>
 <Home/>
 <About/>
 <Products/>
 <Services/>
 <Contact/>
 <Footer/>
    </div>
  );
}

export default App;
