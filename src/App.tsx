import React from 'react';

import './assets/scss/main.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Resume from './components/Resume/Resume';

const App: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Profile />
        <Resume />
      </main>
    </div>
  );
}

export default App;
