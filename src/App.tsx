import React from 'react';

import './assets/scss/main.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

const App: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Profile />
        <section>
          
        </section>
      </main>
    </div>
  );
}

export default App;
