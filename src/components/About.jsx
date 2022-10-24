import React from 'react';
import styles from '../style';
const About = () => {
    return (
        <section id="about" className={
            `flex flex-col ${styles.paddingY} relative items-center justify-center min-h-screen snap-center `}>
                <h2 className="text-[48px] text-accent font-bold font-poppins ">About Me</h2>
                <div className="md:w-1/2 w-3/4 mt-4">
                    
                    <p className='paragraph text-secondary font-poppins font-[1rem]'>

                        Hello, my name is <span className="text-highlight font-semibold">Jean-Michael Bernard</span>, and I am an enthusiastic and dedicated learner.
                        
                        I started out as a Personal trainer and Gymnastics coach before entering 
                        college for a <span className="text-highlight font-semibold">B.S. in Cognitive Science: Human-Computer interaction</span> from University of California, San Diego, 
                        as well a minor in Linguistics and  in Psychology.
                    </p>
                    <p className='text-secondary font-poppins'>
                        I started programming with MATLab for engineering projects, and then moved through C++ and Java before settling with Python, Javascript and C#.
                        I use Python for my data science projects, while using Javascript as part of the MERN stack for web development projects.
                        At university I studied the psychology of design and implemented strategies used in web development for a more appealing experience.
                    </p>
                    <p className='text-secondary font-poppins'>
                        I am eagerly searching for oppurtunnities that allow me to enhance and develop my skills further.

                    </p>
                </div>
        </section>
    );
};

export default About;