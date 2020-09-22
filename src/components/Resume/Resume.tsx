import React from 'react';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import HeadingSecondary from '../Headings/HeadingSecondary';
import Timeline from '../Timeline/Timeline';
import TimelineItem from '../Timeline/TimelineItem';
import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';
import Section from '../Section/Section';
import * as data from '../../data/index.json';
import Skill from '../Skill/Skill';

const Resume = () => (
    <Section>
        <PageHeader title="Resume" subTitle="4 Years of Experience" />

        <Container>
            <GridContainer>
                <GridItem styles="col-6">
                    <HeadingSecondary text="Experience" />

                    <Timeline>
                        {
                            data.experiences.map(experience => {
                                return <TimelineItem {...experience} />
                            })
                        }
                    </Timeline>
                </GridItem>

                <GridItem styles="col-6">
                    <HeadingSecondary text="Education" />

                    <Timeline>
                        {
                            data.educations.map(education => {
                                return <div className="timeline__item">
                                        <h5 className="timeline__period">{education.year}</h5>
                                        <span className="timeline__text">{education.school}</span>
                                        <h4 className="heading-tertiary">{education.degree}</h4>
                                    </div>
                            })
                        }
                    </Timeline>
                </GridItem>

            </GridContainer>

            <GridContainer>
                <GridItem styles="col-4">
                    <HeadingSecondary text="Basic Stack" />

                    <Skill skills={data.skills.basics} />
                </GridItem>

                <GridItem styles="col-4">
                    <HeadingSecondary text="Framework/Library" />

                    <Skill skills={data.skills.libraries} />
                </GridItem>

                <GridItem styles="col-4">
                    <HeadingSecondary text="Database" />

                    <Skill skills={data.skills.databases} />
                </GridItem>
            </GridContainer>

            <GridContainer>
                <GridItem styles="col-4">
                    <HeadingSecondary text="Testing Tools" />

                    <Skill skills={data.skills.testing} />
                </GridItem>

                <GridItem styles="col-4">
                    <HeadingSecondary text="Continuous Integration" />

                    <Skill skills={data.skills.integration} />
                </GridItem>

                <GridItem styles="col-4">
                    <HeadingSecondary text="Infrastructure" />

                    <Skill skills={data.skills.infrastructure} />
                </GridItem>
            </GridContainer>

            <GridContainer>
                <GridItem styles="col-4">
                    <HeadingSecondary text="API Specs" />

                    <Skill skills={data.skills.api} />
                </GridItem>
            </GridContainer>
        </Container>
    </Section>
);

export default Resume;