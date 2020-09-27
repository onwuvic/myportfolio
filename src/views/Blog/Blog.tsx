import React from 'react';
import GridContainer from '../../components/Grid/GridContainer';
import HeadingSecondary from '../../components/Headings/HeadingSecondary';
import GridItem from '../../components/Grid/GridItem';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as data from '../../data/index.json'

const Blog = () => (
    <Section styles="u-no-padding-bottom">
        <PageHeader title="Blog" />
        
        <Container>
            <GridContainer>
                <HeadingSecondary text="Latest Articles" />

                {
                    data.blogs.map(blog => {
                        return <GridItem styles="col-12" key={blog.title}>
                                    <h4 className="heading-sub">{blog.date}</h4>
                                    <h2 className="title">
                                        <a target="_blank" rel="noopener noreferrer" href={blog.link} className="title__link">
                                            {blog.title}
                                        </a>
                                    </h2>
                                    <p className="paragraph"> {blog.body} </p>
                                </GridItem>
                    })
                }
            </GridContainer>
        </Container>
    </Section>
);

export default Blog;
