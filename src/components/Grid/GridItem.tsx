import React from 'react';

const GridItem = (props: any) => {
    const { children, className } = props;
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default GridItem;