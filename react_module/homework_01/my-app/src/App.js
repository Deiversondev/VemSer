import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import ContactUs from './ContactUs';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
      <Router>

      <Header Link={Link}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
      </Routes>
  
      <Footer Link={Link}/>

      </Router>
    

    </div>
  );
}

export default App;
