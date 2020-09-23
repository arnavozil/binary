import React from 'react';
import { seasons } from '../../strings';
import Card from '../../widgets/Card/Card';
import { SecondaryHeading } from '../../widgets/Heading/Heading';

import s from './Season.module.scss';

const Season = () => {

    return (
        <div className = {s.main}>
            <SecondaryHeading text = 'Season 1 Series' />
            <div className = {s.main_grid}>
                {seasons.map((el, ind) => <Card el = {el} key = {JSON.stringify(el)} last = {ind === seasons.length - 1} />)}
            </div>
        </div>
    )
};

export default Season;