import React from 'react';
import MainContainer from '../../containers/MainContainer/MainContainer';
import Carousel from '../Carousel/Carousel';
import Collection from '../Collection/Collection';
import NewMovie from '../NewMovie/NewMovie';

const Home = () => {

    return (
        <MainContainer selected = 'Main Page' >
            <Carousel />
            <Collection />
            <NewMovie />
        </MainContainer>
    )
};

export default Home;