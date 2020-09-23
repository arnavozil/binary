import React from 'react';
import MainContainer from '../../containers/MainContainer/MainContainer';
import { seriesHead } from '../../strings';
import { Slide } from '../Carousel/Carousel';
import Description from '../Description/Description';
import Season from '../Season/Season';
import Watching from '../Watching/Watching';

const Series = () => {

    return (
        <MainContainer selected = 'TV Series'>
            <Slide 
                el = {seriesHead.image}
                {...seriesHead}
                different
            />
            <Watching />
            <Description />
            <Season />
        </MainContainer>
    )
};

export default Series;