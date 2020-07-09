import React from 'react';
// import 'antd/dist/antd.css';
import { Tabs } from 'antd';
// import GridContainer from '../Grid/GridContainer';
// import GridItem from '../Grid/GridItem';
import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';
import Section from '../Section/Section';
// import Tabs from '../Tabs/Tabs';
const { TabPane } = Tabs;

const projects = [
    {
        label: 'html',
        image: 'https://s3.amazonaws.com/creativetim_bucket/products/55/thumb/opt_mdp_angular_thumbnail.jpg?1551358096',
        alt: 'Sprouge Image',
        title: 'Sprouge',
        stack: 'Angular, Node, Express',
        preview: 'https://gog.com',
        github: 'https://gog.com',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quisquam atque tenetur libero, quos repellendus, ab tempora recusandae, velit hic dicta ullam odit provident molestias ipsam! Eos tempora quia sit.',
    },
    {
        label: 'angular',
        image: 'https://s3.amazonaws.com/creativetim_bucket/products/55/thumb/opt_mdp_angular_thumbnail.jpg?1551358096',
        alt: 'Sprouge Image',
        title: 'Sprouge',
        stack: 'Angular, Node, Express',
        preview: 'https://gog.com',
        github: 'https://gog.com',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quisquam atque tenetur libero, quos repellendus, ab tempora recusandae, velit hic dicta ullam odit provident molestias ipsam! Eos tempora quia sit.',
    },
    {
        label: 'react',
        image: 'https://s3.amazonaws.com/creativetim_bucket/products/55/thumb/opt_mdp_angular_thumbnail.jpg?1551358096',
        alt: 'Sprouge Image',
        title: 'Sprouge',
        stack: 'Angular, Node, Express',
        preview: 'https://gog.com',
        github: 'https://gog.com',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quisquam atque tenetur libero, quos repellendus, ab tempora recusandae, velit hic dicta ullam odit provident molestias ipsam! Eos tempora quia sit.',
    },
    {
        label: 'react',
        image: 'https://s3.amazonaws.com/creativetim_bucket/products/55/thumb/opt_mdp_angular_thumbnail.jpg?1551358096',
        alt: 'Sprouge Image',
        title: 'Sprouge',
        stack: 'Angular, Node, Express',
        preview: 'https://gog.com',
        github: 'https://gog.com',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quisquam atque tenetur libero, quos repellendus, ab tempora recusandae, velit hic dicta ullam odit provident molestias ipsam! Eos tempora quia sit.',
    },
    {
        label: 'react',
        image: 'https://s3.amazonaws.com/creativetim_bucket/products/55/thumb/opt_mdp_angular_thumbnail.jpg?1551358096',
        alt: 'Sprouge Image',
        title: 'Sprouge',
        stack: 'Angular, Node, Express',
        preview: 'https://gog.com',
        github: 'https://gog.com',
        about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quisquam atque tenetur libero, quos repellendus, ab tempora recusandae, velit hic dicta ullam odit provident molestias ipsam! Eos tempora quia sit.',
    },
];

const Portfolio = () => (
    <Section>
        <PageHeader title="Projects" />

        <Container>
            {/* <div className="tabs">
                <ul className="tab__list">
                    <li className="tab__link">All</li>
                    <li className="tab__link">HTML5 & CSS3</li>
                    <li className="tab__link">React</li>
                    <li className="tab__link">Angular</li>
                    <li className="tab__link">Node/Angular</li>
                    <li className="tab__link">Node/React</li>
                </ul>

                <div className="tab-grid tab-columns">
                    <div className="tab__item">
                        <div className="card">
                            <div className="card__image">
                                <img
                                    src="https://s3.amazonaws.com/creativetim_bucket/products/55/thumb/opt_mdp_angular_thumbnail.jpg?1551358096"
                                    alt="" />
                            </div>
                            <div className="card__content">
                                <span className="card__title">
                                    Card Title
                                </span>
                                <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum qui quae commodi necessitatibus. Enim placeat qui ipsum dolor, quas consequuntur accusamus quae non .</p>
                                <p className="card__stack">Angular, Node, Sequelize, Express</p>
                            </div>
                            <div className="card__actions">
                                <a className="card__link" href="#">Live preview</a>
                                <a className="card__link" href="#">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <Tabs projects={projects} />     */}
            <Tabs defaultActiveKey="1" onChange={() =>  {}}>
                <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </Container>
    </Section>
);

export default Portfolio;