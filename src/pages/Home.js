import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Banner />
            <Card />
            <Footer />
        </div>
    );
};

export default Home;