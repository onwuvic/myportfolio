import React from 'react';
import { Link } from 'react-router-dom';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Container from '../../components/Container/Container';

const Home = () => (
    <section className="section-profile">
        <Container>
            <GridContainer>
                <GridItem styles="col-6 u-margin-bottom-small">
                    <div className="profile__box">
                        <div className="profile__image"></div>
                    </div>
                </GridItem>
                <GridItem styles="col-6">
                    <div className="profile__detail">
                        <h4 className="heading-sub">Full Stack Software Engineer</h4>
                        <h1 className="heading-primary">Victor Onwuzor</h1>
                        <p className="paragraph-md">
                            I am a Fullstack JavaScript Software Engineer with 4 years experience building innovative solutions for globally distributed teams.
                        </p>
                        <br/>
                        <p className="paragraph-md">
                            I have worked on Fintech, Renewable energy, Health, and Transportation products.
                        </p>
                        <br/>
                        <p className="paragraph-md">
                            In my spare time, I enjoy reading, watching Anime and I am an aspiring Photographer.
                        </p>
                        <div className="u-margin-top-small">
                            <Link to={"#"} className="btn btn__primary">Download CV</Link>
                            <Link to="/contact" className="btn btn__secondary">Contact</Link>
                        </div>
                    </div>
                </GridItem>
            </GridContainer>
        </Container>
    </section>
)

export default Home;