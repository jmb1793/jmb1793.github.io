import React from 'react';
import Card from './Card';
import styles from '../style';
import { skills } from '../constants';
import {pgSQL,python,tableau,tf2,twcss,reactSVG,js} from '../assets';

const Projects = () => {
    return (
        <section id="skills" className={
            `flex flex-col ${styles.paddingY} items-center justify-center min-h-full md:h-screen`}>
                <h2 className="text-[48px] font-poppins font-bold text-accent">Skills</h2>
                <div className="flex flex-wrap flex-row justify-center item-center snap-none snap-x snap-proximity">
                    {skills.map(img => ( 
                        <Card key={img.key} id={img.key} title={img.title} link={img.img} text={img.text}/>
                    ))}
                </div>
        </section>
    );
};

export default Projects;