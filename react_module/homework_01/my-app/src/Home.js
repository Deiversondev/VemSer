
import Main from './components/HomePage/Main';
import Content from './components/HomePage/Content';
import SectionMap from './components/HomePage/SectionMap';
import './App.css';


function Home() {
    return (
      <div className="App">
       <Main/>
       <Content/>
       <SectionMap/>
      </div>
    );
  }
  
  export default Home;