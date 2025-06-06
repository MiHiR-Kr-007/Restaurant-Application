import React from 'react';
import { HeroSection, About, Qualities, Menu, Reservation, Footer } from '../components/index.js';

function Home() {
    return (
        <>
            <HeroSection/>
            <About/>
            <Qualities/>
            <Menu/>
            <Reservation/>
            <Footer/>
        </>
    )
}

export default Home;
