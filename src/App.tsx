import React from 'react';

import './assets/scss/main.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';

const App: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Profile />
        <Resume />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
