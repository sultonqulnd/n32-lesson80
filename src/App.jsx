import React from 'react';
import './App.css';
import Cakes from './components/Cakes';
import HookCakes from './components/HookCakes';
import IceCreams from './components/IceCreams';

const App = () => {
  return (
    <div>
      {/* <Cakes /> */}
      <HookCakes />
      <IceCreams />
    </div>
  );
};

export default App;
