import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Bodyerror from '../components/Bodyerror';

const Error404 = () => {
    return (
        <div className='error'>
            <Logo />
           <Navigation />
           <Bodyerror />
           <Footer />
        </div>
    );
};

export default Error404;