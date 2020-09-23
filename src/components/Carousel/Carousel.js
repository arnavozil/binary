import React from 'react';
import Carousel from 'nuka-carousel';
import { BsChevronLeft, BsChevronRight, BsPlayFill, BsStarFill } from 'react-icons/bs';
import { movie } from '../../strings';

import s from './Carousel.module.scss';
import { PrimaryHeading, TertiaryHeading } from '../../widgets/Heading/Heading';
import { RoundButton } from '../../widgets/Button/Button';

const EditedCarousel = () => {

    const {
        images
    } = movie;

    return (
        <div className = {s.carousel}>
            <Carousel
                renderCenterLeftControls = {({previousSlide}) => <div onClick = {previousSlide} className = {s.carousel_tick}><BsChevronLeft /></div>}
                renderCenterRightControls = {({nextSlide}) => <div onClick = {nextSlide} className = {s.carousel_tick}><BsChevronRight /></div>}
            >
                {
                    images.map(el => {
                        return <Slide 
                            el = {el}
                            {...movie}
                            key = {JSON.stringify(el)}
                        />
                    })
                }
            </Carousel>
        </div>
    )
};

export default EditedCarousel;

export const Slide = ({el, description, genre, title, different = false}) => <div style = {{backgroundImage: `url(${el})`}} className = {s.carousel}>
    <div className = {s.carousel_textBox}>
        <div className = {s.carousel_textBox_genres}>
            {genre.map((g, ind) => {
                return <span key = {g} className = {s.carousel_textBox_genres_genre}>
                    {ind !== genre.length - 1 ? `${g} | ` : g}
                </span>
            })}
        </div> 
        <PrimaryHeading text = {title} />
        {!different && <div className = {s.carousel_textBox_group}>
            <span className = {s.carousel_textBox_group_button}>
                <BsPlayFill />
                <span className = {s.carousel_textBox_group_button_text}>Watch Trailer</span>
            </span>
            <span className = {s.carousel_textBox_group_button}>
                <BsStarFill />
                <span className = {s.carousel_textBox_group_button_text}>Add To Favourites</span>
            </span>
        </div>} 
        <p className = {s.carousel_textBox_description}>
            {description}
        </p> 
        {different && <>
            <TertiaryHeading text='Seasons:' />
            <div className = {s.different}>
                <RoundButton text = 'Season 1' />
                <RoundButton selected = {false} text = 'Season 2' />
                <RoundButton selected = {false} text = 'Season 3' />
                <RoundButton selected = {false} text = 'Season 4' />
                <RoundButton selected = {false} text = 'Season 5' />
            </div>
        </>}
    </div>
</div>