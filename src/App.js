import React from 'react';
import './App.css';
import Generator from './components/Generator';

function App() {
  return (
    <React.Fragment>
      <div className="game-body">
        <Generator />
      </div>
    </React.Fragment>
  );
}

export default App;
