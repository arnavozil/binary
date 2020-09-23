import React from 'react';
import { collections } from '../../strings';
import { RoundButton } from '../../widgets/Button/Button';
import Card from '../../widgets/Card/Card';
import { SecondaryHeading } from '../../widgets/Heading/Heading';


import s from './Collection.module.scss';


const Collection = () => {

    return (
        <div className = {s.main}>
            <div className = {s.main_head}>
                <SecondaryHeading text = 'Movie Collections' />
                <RoundButton text = 'All Collections' />
            </div>
            <div className = {s.main_grid}>
                {collections.map((el, ind) => <Card el = {el} key = {JSON.stringify(el)} last = {ind === collections.length - 1} />)}
            </div>
        </div>
    )
};

export default Collection;