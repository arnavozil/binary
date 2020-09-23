import React from 'react';
import { newMovie } from '../../strings';
import Card from '../../widgets/Card/Card';
import { SecondaryHeading } from '../../widgets/Heading/Heading';

import s from './NewMovie.module.scss';

const NewMovie = () => {

    return (
        <div className = {s.main}>
            <SecondaryHeading text = 'New' />
            <div className = {s.main_grid}>
                {newMovie.map((el, ind) => <Card el = {el} key = {JSON.stringify(el)} last = {ind === newMovie.length - 1} />)}
            </div>
        </div>
    )
};

export default NewMovie;