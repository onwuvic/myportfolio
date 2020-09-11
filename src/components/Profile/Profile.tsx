import React from 'react';
import { Link } from 'react-router-dom';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Container from '../Container/Container';

const Profile = () => (
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
                        <h4 className="heading-sub">FullStack Software Engineer</h4>
                        <h1 className="heading-primary">Victor Onwuzor</h1>
                        <p className="paragraph-lg">
                            An experienced Fullstack Software Engineer who currently work at LevelTen Energy, Seattle. 
                            He has 4 years experience as a JavaScript Software Engineer building innovative solutions for globally distributed teams. 
                            In his spare time he is an avid reader, lover of Anime and is attempting to be a Photography.
                        </p>
                        <div className="u-margin-top-small">
                            <Link to={"#"} className="btn btn__primary">Download CV</Link>
                            <Link to={"#"} className="btn btn__secondary">Contact</Link>
                        </div>
                    </div>
                </GridItem>
            </GridContainer>
        </Container>
    </section>
)

export default Profile;