import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import TourGuides from '../Guides/TourGuides';
import Places from '../Places/Places';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Places></Places>
            <TourGuides></TourGuides>
            <Footer></Footer>
        </div>
    );
};

export default Home;