import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from "react-ga";
// import { createBrowserHistory } from 'history';

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
  
  // const history = createBrowserHistory();

  useEffect(() => {
    ReactGA.initialize('G-YSEQPWBTC9');
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, [])

  // history.listen(location => {
  //   console.log('---->', location);
  //     // ReactGA.initialize('G-YSEQPWBTC9');
  //     // ReactGA.set({ page: location.pathname }); // Update the user's current page
  //     // ReactGA.pageview(location.pathname); // Record a pageview for the given page
  // });

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
