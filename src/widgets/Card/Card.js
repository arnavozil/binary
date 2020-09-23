import React from 'react';
import { TertiaryHeading } from '../../widgets/Heading/Heading';

import s from './Card.module.scss';


const Card = ({
    el
}) => {

    return (
        <div style = {{backgroundImage: `url(${el.image})`}} className = {s.card}>
            <div className = {s.card_info}>
                <TertiaryHeading text = {el.title} />
                <p className = {s.card_info_sub}>{el.subtitle}</p>
            </div>
            {el.count && <span className = {s.card_badge}>
                {el.count}
            </span>}
        </div>
    );
};

export default Card;