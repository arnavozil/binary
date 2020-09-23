import React from 'react';
import { BsPlayFill, BsStarFill } from 'react-icons/bs';
import { watching } from '../../strings';
import { TertiaryHeading } from '../../widgets/Heading/Heading';

import s from './Watching.module.scss';

const Watching = () => {

    return (
        <div className = {s.main}>
            <div className = {s.main_info}>
                <div className = {s.main_info_image}>
                    <img
                        src = {watching.image}
                        alt = {watching.title}
                        className = {s.main_info_image_img}
                    />
                </div>
                <div className = {s.main_info_text}>
                    <TertiaryHeading text = 'Continue watching' />
                    <p className = {s.main_info_text_on}>{watching.on}</p>
                    <p className = {s.main_info_text_title}>{watching.title}</p>
                </div>
            </div>
            <div className = {s.main_group}>
                <div className = {s.main_group_button}>
                    <BsStarFill />
                    <span className = {s.main_group_button_text}>In Favourites</span>
                </div>
                <div className = {s.main_group_button}>
                    <BsPlayFill />
                    <span className = {s.main_group_button_text}>Watch Trailer</span>
                </div>
            </div>
        </div>
    )
};

export default Watching;