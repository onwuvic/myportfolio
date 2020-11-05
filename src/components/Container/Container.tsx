import React from 'react';
import './Container.scss';

type Props = {
    children: React.ReactNode;
}

const Container = (props: Props) => {
    const { children } = props;
    return (
        <div className="Container">
            {children}
        </div>
    );
};

export default Container;
