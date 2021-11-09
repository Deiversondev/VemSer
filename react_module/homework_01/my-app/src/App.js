import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Content from './components/Content';
import SectionMap from './components/SectionMap';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <Content/>
     <SectionMap/>
     <Footer/>
    </div>
  );
}

export default App;
