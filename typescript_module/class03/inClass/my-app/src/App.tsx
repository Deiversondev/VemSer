import React from 'react';
import './App.css';
import Routers from './Routers';
// import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
        {/* <AuthProvider> */}
          <Routers/>
        {/* </AuthProvider> */}
    </div>
  );
}

export default App;
