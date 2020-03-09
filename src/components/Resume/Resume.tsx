import React from 'react';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import HeadingSecondary from '../Headings/HeadingSecondary';
import Timeline from '../Timeline/Timeline';
import TimelineItem from '../Timeline/TimelineItem';
import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';
import Section from '../Section/Section';

const Resume = () => (
    <Section>
        <PageHeader title="Resume" subTitle="3 Years of Experience" />

        <Container>
            <GridContainer>
                <GridItem styles="col-6">
                    <HeadingSecondary text="Experience" />

                    <Timeline>
                        {/* provide data on experience here and loop through them */}
                        <TimelineItem />
                        <TimelineItem />
                        <TimelineItem />
                        <TimelineItem />
                    </Timeline>
                </GridItem>

                <GridItem styles="col-6">
                    <HeadingSecondary text="Education" />

                    <Timeline>
                        {/* provide data on enducation here and loop through them. Make p optional*/}
                        <div className="timeline__item">
                            <h5 className="timeline__period">2015</h5>
                            <span className="timeline__text">University of Benin</span>
                            <h4 className="heading-tertiary">Bachelor of Science in Economics and Statistics</h4>
                            {/* <p className="paragraph">Lorem ipsum, tur illum perferendis suscipit neque sit!</p> */}
                        </div>
                    </Timeline>
                </GridItem>

            </GridContainer>

            <GridContainer>
                <GridItem styles="col-4">
                    <HeadingSecondary text="Basic Stack" />

                    {/* Make this a component skills */}
                    <div className="skills">
                        <ul>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Node.Js</li>
                            <li>HTML5</li>
                            <li>CSS3 / SASS</li>
                        </ul>
                    </div>
                </GridItem>

                <GridItem styles="col-4">
                    <HeadingSecondary text="Framework/Library" />

                    <div className="skills">
                        <ul>
                            <li>Express.JS</li>
                            <li>Sails.JS</li>
                            <li>Nest.JS</li>
                            <li>Angular 2+</li>
                            <li>React / Redux</li>
                            <li>Ngrx</li>
                            <li>RxJS</li>
                        </ul>
                    </div>
                </GridItem>

                <GridItem styles="col-4">
                    <HeadingSecondary text="Database" />

                    <div className="skills">
                        <ul>
                            <li>MongoDB / Mongoose</li>
                            <li>PostgreSQL / Sequelize</li>
                            <li>MySQL</li>
                            <li>Redis</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </GridItem>
            </GridContainer>

            <GridContainer>
                <GridItem styles="col-4">
                    <HeadingSecondary text="Testing Tools" />

                    <div className="skills">
                        <ul>
                            <li>Mocha / Chai</li>
                            <li>Jest</li>
                            <li>Jasmine</li>
                            <li>Protractor</li>
                            <li>Cypress</li>
                            <li>Selenium</li>
                            <li>Enzyme</li>
                        </ul>
                    </div>
                </GridItem>

                <GridItem styles="col-4">
                    <HeadingSecondary text="Continuous Integration" />

                    <div className="skills">
                        <ul>
                            <li>Circle CI</li>
                            <li>Travis CI</li>
                            <li>Code Climate</li>
                        </ul>
                    </div>
                </GridItem>

                <GridItem styles="col-4">
                    <HeadingSecondary text="Infrastructure" />

                    <div className="skills">
                        <ul>
                            <li>Heroku</li>
                            <li>AWS</li>
                            <li>Netify</li>
                        </ul>
                    </div>
                </GridItem>
            </GridContainer>
        </Container>
    </Section>
);

export default Resume;