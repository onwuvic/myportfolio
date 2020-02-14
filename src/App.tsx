import React from 'react';

import './assets/scss/main.scss';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <section className="section-profile">
          <div className="row">
            <div className="col-6 u-margin-bottom-small">
              <div className="profile__box">
                <div className="profile__image"></div>
              </div>
            </div>
            <div className="col-6">
              <div className="profile__detail">
                <h4 className="heading-sub">FullStack Software Engineer</h4>
                <h1 className="heading-primary">Victor Onwuzor</h1>
                <p className="paragraph">
                  Experienced Software Engineer with a passion for developing innovative solutions that
                  expedite the efficiency and effectiveness of organizational success. Well-versed in technology
                  and writing code to create systems that are reliable and user-friendly.
                  A skilled leader who has the proven ability to motivate, educate, and manage a team of
                  professionals to build software programs and effectively track changes.
              </p>
                <div className="u-margin-top-small">
                  <a href="#" className="btn btn__primary">Download CV</a>
                  <a href="#" className="btn btn__secondary">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
