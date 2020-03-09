import React from 'react';

type Props = {
    children: React.ReactNode;
}

const Section = (props: Props) => {
    const { children } = props;
    return (
        <section className="section">
            {children}
        </section>
    );
};

export default Section;