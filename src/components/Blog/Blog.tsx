import React from 'react';
import { Link } from 'react-router-dom';
import GridContainer from '../Grid/GridContainer';
import HeadingSecondary from '../Headings/HeadingSecondary';
import GridItem from '../Grid/GridItem';
import Section from '../Section/Section';
import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';

const Blog = () => (
    <Section>
        <PageHeader title="Blog" />
        
        <Container>
            <GridContainer>
                <HeadingSecondary text="Latest Articles" />

                <GridItem styles="col-12">
                    <h4 className="heading-sub">FEBRUARY 01, 2020</h4>
                    <h2 className="title">
                        <Link to={"#"} className="title__link">
                            Tailwind CSS static navbar with shadow on scroll for Vue applications
                </Link>
                    </h2>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium neque ea dolore culpa ex officiis et inventore recusandae quaerat?
                        Itaque quos enim nulla nemo est officia suscipit mollitia quis voluptatum.
              </p>
                </GridItem>

                <GridItem styles="col-12">
                    <h4 className="heading-sub">JANUARY 04, 2020</h4>
                    <h2 className="title">
                        <Link to={"#"} className="title__link">
                            Tailwind CSS static navbar with shadow on scroll for Vue applications
                </Link>
                    </h2>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium neque ea dolore culpa ex officiis et inventore recusandae quaerat?
                        Itaque quos enim nulla nemo est officia suscipit mollitia quis voluptatum.
              </p>
                </GridItem>

                <GridItem styles="col-12">
                    <h4 className="heading-sub">NOVEMBER 09, 2019</h4>
                    <h2 className="title">
                        <Link to={"#"} className="title__link">
                            Tailwind CSS static navbar with shadow on scroll for Vue applications
                </Link>
                    </h2>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium neque ea dolore culpa ex officiis et inventore recusandae quaerat?
                        Itaque quos enim nulla nemo est officia suscipit mollitia quis voluptatum.
              </p>
                </GridItem>
            </GridContainer>
        </Container>
    </Section>
);

export default Blog;
