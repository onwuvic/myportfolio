import React from 'react';

import './assets/scss/main.scss';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div className="layout">
      <Header />
    </div>
  );
}

export default App;
