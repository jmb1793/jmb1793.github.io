import React from 'react';
import styles from '../style.js';
import { classMaterials } from '../assets';
import Button from './Button';

const Hero = () => {
    return (
        <section id="home" className={
                `flex md:flex-row flex-col ${styles.paddingY} px-4 relative mt-5 items-center justify-center snap-center`}>


            {/* H1 */}
            <div className="flex flex-col justify-between sm:items-left items:center sm:w-1/2 mx-4 ">
                <h1 className="flex-1 font-poppins font-bold font-semibold ss:text-[72px] text-[64px]
                                text-white ss:leading-[100px] leading-[75px]">
                    <span className={`secondary-gradient text-accent`}>Jean-Michael</span> Bernard
                    
                </h1>
                <p className="flex-1 font-poppins font-semibold ss:text-[72px] text-[44px]
                                text-white ss:leading-[100px] leading-[75px] animate-pulse">Programmer & <span className="text-highlight">Researcher</span></p>
                <p className="flex-1 font-poppins  ss:text-[72px] text-[30px]
                                text-white ss:leading-[100px] leading-[75px]">Aiming for efficiency and innovation</p>
                <Button page="contact"/>
            </div>


            <div className={`flex-1 item-right relative hidden md:block`}>
                <img src={classMaterials} alt="banner-image" name="banner-img"/>
            </div>

        </section>
    );
};

export default Hero;