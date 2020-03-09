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
                        <p className="paragraph">
                            Experienced Software Engineer with a passion for developing innovative solutions that
                            expedite the efficiency and effectiveness of organizational success. Well-versed in technology
                            and writing code to create systems that are reliable and user-friendly.
                            A skilled leader who has the proven ability to motivate, educate, and manage a team of
                            professionals to build software programs and effectively track changes.
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