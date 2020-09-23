import React from 'react';
import {
    AiFillHome,
    BsTvFill,
    BiMovie,
    GiTvTower,
    BsPeopleCircle,
    BiFootball,
    FaCat,
    BsStarFill,
    FaRegUser
} from 'react-icons/all';

export const categoryList = [
    { icon: <AiFillHome />, text: 'Main Page' },
    { icon: <GiTvTower />, text: 'TV Channels' },
    { icon: <BiMovie />, text: 'Movies' },
    { icon: <BsTvFill />, text: 'TV Series' },
    { icon: <BsPeopleCircle />, text: 'Concerts' },
    { icon: <BiFootball />, text: 'Sports' },
    { icon: <FaCat />, text: 'For Kids' },
    { icon: <BsStarFill />, text: 'Favourites' },
    { icon: <FaRegUser />, text: 'Personal Data' }
];

export const movie = {
    images: [
        require('../assets/interstellar_3.jpg'),
        require('../assets/interstellar_2.jpg'),
        require('../assets/interstellar_1.jpg'),
        require('../assets/interstellar_4.jpg'),
    ],
    genre: ['Action', 'Drama', 'Movie', 'Adventure'],
    title: 'Interstellar',
    description: 'Interstellar is a 2014 epic science fiction film directed, co-written and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, John Lithgow, Matt Damon, and Michael Caine.'
};


export const seriesHead = {
    image: require('../assets/westworld.jpeg'),
    genre: ['Action', 'Drama', 'Series', '2018'],
    title: 'Westworld',
    description: 'The story begins in WestWorld, a fictional technologically advanced Wild-West themed amusement park populated by android "hosts"'
}

export const collections = [{
    title: 'Adventure',
    subtitle: 'Collection of the films that amaze',
    count: 24,
    image: require('../assets/adventure.jpg'),
}, {
    title: 'Fantastic',
    subtitle: 'Collection of the films that amaze',
    count: 19,
    image: require('../assets/fantastic.jpg'),
}, {
    title: 'Comedy',
    subtitle: 'Collection of the films that amaze',
    count: 34,
    image: require('../assets/comedy.jpg'),
}, {
    title: 'Drama',
    subtitle: 'Collection of the films that amaze',
    count: 17,
    image: require('../assets/drama.jpg'),
}, ];

export const newMovie = [{
    title: '21 Bridges',
    subtitle: 'Action, Thriller',
    image: require('../assets/21bridges.jpg'),
}, {
    title: 'Jumanji: The Next Level',
    subtitle: 'Fantasy, Adventure, Comedy',
    image: require('../assets/jumanji.jpg'),
}, {
    title: 'Midway',
    subtitle: 'Action, Adventure, Drama',
    image: require('../assets/midway.jpg'),
}, {
    title: 'The Gentlemen',
    subtitle: 'Action, Comedy',
    image: require('../assets/gentlemen.jpg'),
},  {
    title: 'Sonic',
    subtitle: 'Action',
    image: require('../assets/sonic.jpg'),
}, ];

export const seasons = [{
    title: 'The Original',
    subtitle: 'Episode 1',
    image: require('../assets/s1e1.jpeg')
}, {
    title: 'Chestnut',
    subtitle: 'Episode 2',
    image: require('../assets/s2e2.jpg')
}, {
    title: 'The Stray',
    subtitle: 'Episode 3',
    image: require('../assets/s3e3.jpg')
}, {
    title: 'Dissonance Theory',
    subtitle: 'Episode 4',
    image: require('../assets/s4e4.jpg')
}, {
    title: 'Contrapasso',
    subtitle: 'Episode 5',
    image: require('../assets/s5e5.jpg')
}];

export const watching = {
    on: 'Season 1 Series 3',
    title: '"The Stray"',
    image: require('../assets/continue.jpeg')
};

export const seriesInfo = 'The story begins in WestWorld, a fictional technologically advanced Wild-West themed amusement park populated by android "hosts". The park caters to high paying "guests" who may indulge their wildest fantasies within the park without fear of retailiation from the hosts, who are prevented by their programming from harming humans.'

export const seriesStats = {
    director: 'Jonathan Nolan, Johnny Campbell, Richard J. Lewis',
    cast: 'Anthony Hopkins, Ed Harris, Evan Rachel Wood, James Marsden, Thandie Newton',
    country: 'USA',
    production: 'HBO'
};