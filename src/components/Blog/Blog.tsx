import React from 'react';
import GridContainer from '../Grid/GridContainer';
import HeadingSecondary from '../Headings/HeadingSecondary';
import GridItem from '../Grid/GridItem';
import Section from '../Section/Section';
import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';
import * as data from '../../data/index.json'

const Blog = () => (
    <Section styles="u-no-padding-bottom">
        <PageHeader title="Blog" />
        
        <Container>
            <GridContainer>
                <HeadingSecondary text="Latest Articles" />

                {
                    data.blogs.map(blog => {
                        return <GridItem styles="col-12">
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
