import React from 'react';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';
import Section from '../Section/Section';

const Contact = () => (
    <Section>
        <PageHeader title="Contact" />

        <Container>
            <GridContainer>
                <GridItem styles="col-12">
                    <p>Contact</p>
                </GridItem>
            </GridContainer>
        </Container>
    </Section>
);

export default Contact;