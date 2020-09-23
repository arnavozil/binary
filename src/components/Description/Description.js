import React from 'react';
import { TertiaryHeading } from '../../widgets/Heading/Heading';
import { seriesInfo, seriesStats } from '../../strings';

import s from './Description.module.scss';

const Description = () => {

    return(
        <div className = {s.main}>
            <div className = {s.main_info}>
                <TertiaryHeading text = 'Description:' />
                <p className = {s.main_info_text}>
                    {seriesInfo}
                </p>
            </div>
            <div className = {s.main_stats}>
                <div className = {s.main_stats_left}>
                    <span>Directors:</span>
                    <span>Cast:</span>
                    <span>Country:</span>
                    <span>Production:</span>
                </div>
                <div className = {s.main_stats_right}>
                    <span>{seriesStats.director}</span>
                    <span>{seriesStats.cast}</span>
                    <span>{seriesStats.country}</span>
                    <span>{seriesStats.production}</span>
                </div>
            </div>
        </div>
    )
};

export default Description;