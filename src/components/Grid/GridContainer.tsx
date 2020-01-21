import React from 'react';

const GridContainer = (props: any) => {
    const { children } = props;
    return (
        <div className="row">
            {children}
        </div>
    );
};

export default GridContainer;
