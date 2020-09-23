import React from 'react';

import s from './Button.module.scss';

const MasterButton = ({
    text = '',
    onClick = () => {},
    type = 'primary',
    extraClass = '',
    iconJSX = (<></>),
}) => {

    const determineClass = () => {
        const { primary, secondary, tertiary } = s;
        const map = {primary, secondary, tertiary};
        
        return map[type];
    }

    return (
        <div 
            onClick = {onClick} 
            className = {[determineClass(), extraClass].join(' ')}
        >
            {iconJSX}
            {text}
        </div>
    )
};

export default MasterButton;


export const RoundButton = ({
    text = '',
    onClick = () => {},
    extraClass = '',
    selected = true
}) => {

    return (
        <div
            onClick = {onClick}
            className = {[s.round, extraClass].join(' ')}
            style = {!selected ? {
                color: '#ffffff',
                backgroundColor: '#22222a88'
            } : {}}
        >
            {text}
        </div>
    )
}