import React from 'react';
import { useEffect, useState } from 'react';
import { arrow } from '../assets';

const ToTopButton = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.pageYOffset > 300){
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };

  
    return (
            <div>
                {
                    showButton &&
                    (
                        <button id="toTop" 
                        onClick={scrollToTop} 
                        className={
                            `fixed bottom-10 right-5 sm:bottom-20 sm:right-20 cursor-pointer 
                            bg-accent w-[2rem] h-[2rem] rounded-lg 
                            text-secondary z-40 hover:bg-highlight flex items-center justify-center align-center object-contain`}>
                            <a href="/">
                                <img src={arrow} alt="arrow"/>
                            </a>
                    </button>
                    )
                }
            </div> 
    );
};

export default ToTopButton;