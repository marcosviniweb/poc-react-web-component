import React from 'react';
import Checkbox from './components/Checkbox'; 
import Tags from './components/Tags';

function App() {
  return (
    <div className="App">
      <div className="column">
        <h4> Componente Simples </h4>
        <Checkbox />
      </div>
      <div className="column">
      <h4> Componente Derivada </h4>
        <Tags />
      </div>
    </div>
  );
}

export default App;