import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/scss/main.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <div className="layout">
      <Header />
        <Router>
          <main>
            <Switch>
              <Route path='/' exact component={Profile} />
              <Route path='/resume' exact component={Resume} />
              <Route path='/portfolio' exact component={Portfolio} />
              <Route path='/blog' exact component={Blog} />
              <Route path='/contact' exact component={Contact} />
            </Switch>
          </main>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
