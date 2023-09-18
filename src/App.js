import logo from './logo.svg';
import './App.css';
import Order from  './components/Order.js'
import Navbar from './components/Navbar.js'
import Header from './components/Header.js';
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
     <Order/>
     <Footer/>
    </div>
  );
}

export default App;
