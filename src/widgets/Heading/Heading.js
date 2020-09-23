import React from 'react';

import s from './Heading.module.scss';

export const PrimaryHeading = ({
    children, text
}) => {

    return(
        <h1 className = {s.primary}>
            {children || text}
        </h1>
    )
};

export const SecondaryHeading = ({
    children, text
}) => {

    return(
        <h3 className = {s.secondary}>
            {children || text}
        </h3>
    )
}

export const TertiaryHeading = ({
    children, text
}) => {
    
    return(
        <h5 className = {s.tertiary}>
            {children || text}
        </h5>
    )
}