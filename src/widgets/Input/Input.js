import React from 'react';
import { MdSearch } from 'react-icons/md';

import s from './Input.module.scss';

export const PrimaryInput = ({
    onChange = () => {},
    value = '',
    placeholder = '',
    containerClass = '',
    inputClass = ''
}) => {

    return (
        <div className = {[s.primary, containerClass].join(' ')}>
            <MdSearch className = {s.primary_icon} />
            <input 
                value = {value}
                className = {[s.primary_input, inputClass].join(' ')}
                onChange = {e => onChange(e.target.value)}
                placeholder = {placeholder}
            />
        </div>
    )
};