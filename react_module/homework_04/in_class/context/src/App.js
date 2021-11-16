import Counter from "./Components/Counter";
import CountProvider  from "./context/Count";
import NameProvider from "./context/ChangeName";
import Name from "./Components/Name";
function App() {

  return (
    <div>
     <CountProvider>
       <Counter/>
     </CountProvider>
     <hr />
     <NameProvider>
       <Name/>
     </NameProvider>
     
    </div>
  );
}

export default App;
