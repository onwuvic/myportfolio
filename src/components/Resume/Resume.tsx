import React from 'react';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import HeadingPrimary from '../Headings/HeadingPrimary';
import HeadingSecondary from '../Headings/HeadingSecondary';

const Resume = () => (
    <section className="section-resume">
        <HeadingPrimary text="Resume" />

        <GridContainer>

            <GridItem styles="col-6">
                <HeadingSecondary text="Experience" />

                <div className="timeline">
                    <div className="timeline__item">
                        <h5 className="timeline__period">Jan 2013 - Feb 2016</h5>
                        <span className="timeline__text">Sondermind</span>
                        <h4 className="heading-tertiary">Software Engineer</h4>
                        <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et optio pariatur aliquid earum necessitatibus perspiciatis? Alias, nisi laborum distinctio dolores esse pariatur culpa a consequuntur illum perferendis suscipit neque sit!</p>
                    </div>

                    <div className="timeline__item">
                        <h5 className="timeline__period">Jan 2013 - Feb 2016</h5>
                        <span className="timeline__text">Sondermind</span>
                        <h4 className="heading-tertiary">Software Engineer</h4>
                        <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et optio pariatur aliquid earum necessitatibus perspiciatis? Alias, nisi laborum distinctio dolores esse pariatur culpa a consequuntur illum perferendis suscipit neque sit!</p>
                    </div>

                    <div className="timeline__item">
                        <h5 className="timeline__period">Jan 2013 - Feb 2016</h5>
                        <span className="timeline__text">Sondermind</span>
                        <h4 className="heading-tertiary">Software Engineer</h4>
                        <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et optio pariatur aliquid earum necessitatibus perspiciatis? Alias, nisi laborum distinctio dolores esse pariatur culpa a consequuntur illum perferendis suscipit neque sit!</p>
                    </div>

                    <div className="timeline__item">
                        <h5 className="timeline__period">Jan 2013 - Feb 2016</h5>
                        <span className="timeline__text">Sondermind</span>
                        <h4 className="heading-tertiary">Software Engineer</h4>
                        <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et optio pariatur aliquid earum necessitatibus perspiciatis? Alias, nisi laborum distinctio dolores esse pariatur culpa a consequuntur illum perferendis suscipit neque sit!</p>
                    </div>
                </div>
            </GridItem>

            <GridItem styles="col-6">
                <HeadingSecondary text="Education" />

                <div className="timeline">
                    <div className="timeline__item">
                        <h5 className="timeline__period">2015</h5>
                        <span className="timeline__text">University of Benin</span>
                        <h4 className="heading-tertiary">Bachelor of Science in Economics and Statistics</h4>
                        <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et optio pariatur aliquid earum necessitatibus perspiciatis? Alias, nisi laborum distinctio dolores esse pariatur culpa a consequuntur illum perferendis suscipit neque sit!</p>
                    </div>
                </div>
            </GridItem>

        </GridContainer>

        <GridContainer>
            <GridItem styles="col-6">
                <HeadingSecondary text="Languages" />
            </GridItem>
            
            <GridItem styles="col-6">
                <HeadingSecondary text="Frameworks" />
            </GridItem>
        </GridContainer>
    </section>
);

export default Resume;