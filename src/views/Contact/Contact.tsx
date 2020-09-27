import React from 'react';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Container from '../../components/Container/Container';
import PageHeader from '../../components/PageHeader/PageHeader';
import Section from '../../components/Section/Section';
import HeadingSecondary from '../../components/Headings/HeadingSecondary';

const Contact = () => (
    <Section styles="u-no-padding-bottom">
        <PageHeader title="Contact" />

        <Container>
            <GridContainer>
                <GridItem styles="col-12">
                    <div className="contact">
                        <HeadingSecondary text="Get in Touch" />

                        <div className="contact__box">
                            <h2 className="paragraph-lg u-margin-bottom-small">Want to work together or have any questions?</h2>
                            <a href="mailto:victor.onwuzor@gmail.com" className="btn btn__primary">
                                Say Hello <span role="img" aria-label="emoji">👋</span>
                            </a>
                        </div>
                    </div>
                </GridItem>
            </GridContainer>
        </Container>
    </Section>
);

export default Contact;