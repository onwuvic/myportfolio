import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/scss/main.scss';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Resume from './views/Resume/Resume';
import Footer from './components/Footer/Footer';
import Blog from './views/Blog/Blog';
import Contact from './views/Contact/Contact';

const isMobileMenu = function() {
  if (window.innerWidth > 991) {
    return false;
  }
  return true;
}

const App: React.FC = () => {
  return (
    <div className={`layout ${isMobileMenu() ? '': 'transition-flip-in-right'}`}>
      <Router>
        <Header />
        <main className={`${isMobileMenu() ? 'transition-flip-in-right': ''}`}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/resume' exact component={Resume} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/contact' exact component={Contact} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
