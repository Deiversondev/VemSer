import {
    BrowserRouter as Router, 
    Routes,
    Route,
    Link
  } from 'react-router-dom';
  import Home from './pages/Home';
  import Empresa from './pages/Empresa';
  import Contato from './pages/Contato';
  import Menu from './components/Menu';
  import Footer from './components/Footer';
  
  function Routers() {
  
    return (
        <Router>
         <Menu Link={Link}/>
  
          <Routes>
  
            <Route path="/" element={<Home/>} />
  
            <Route path="/empresa" element={<Empresa/>} />
  
            <Route path="/contato" element={<Contato/>} />
  
          </Routes>
  
          <Footer Link={Link}/>
        </Router>
    );
  }
  
  export default Routers;