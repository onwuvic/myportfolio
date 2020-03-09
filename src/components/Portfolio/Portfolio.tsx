import React from 'react';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';
import Section from '../Section/Section';

const Portfolio = () => (
    <Section>
        <PageHeader title="Projects" />

        <Container>
            <GridContainer>
                <GridItem styles="col-12">
                    <div className="project">
                        <ul className="project__list">
                            <li className="project__item">All</li>
                            <li className="project__item">HTML5 & CSS3</li>
                            <li className="project__item">React</li>
                            <li className="project__item">Angular</li>
                            <li className="project__item">Node/Angular</li>
                            <li className="project__item">Node/React</li>
                        </ul>
                    </div>
                </GridItem>

                <GridItem styles="col-4">
                    <img src="https://images.unsplash.com/photo-1582600409355-58ad1cd446fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" className="project__img" alt="" />
                </GridItem>

                <GridItem styles="col-4">
                    <img src="https://images.unsplash.com/photo-1582600409355-58ad1cd446fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" className="project__img" alt="" />
                </GridItem>

                <GridItem styles="col-4">
                    <img src="https://images.unsplash.com/photo-1582600409355-58ad1cd446fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" className="project__img" alt="" />
                </GridItem>
            </GridContainer>
        </Container>
    </Section>
);

export default Portfolio;