import React, { useState } from 'react';

const Card = (props) => {

    const [display, setDisplay] = useState(true);
    const handleDisplay = e =>{
        setDisplay(!display);
    }

    return (
        <div className=" flex basis-1/4 items-center mx-2">
            <div onClick={handleDisplay} 
                className="flex flex-col bg-[#1B262F] 
                            border-[1px] border-highlight rounded-[5px] w-52 h-52 p-6 mx-auto my-2
                            justify-center items-center text-center
                            hover:scale-105 hover:border-accent focus:scale-105 box-border 
                            shadow-lg shadow-teal-700 hover:shadow-accent">
                
                {display ? 
                <div className=''>
                    <img src={props.link} alt={`${props.title}`}/>
                </div> :
                <div>
                    <p className='paragraph text-secondary font-poppins font-[1rem]'>{props.text}</p>
                </div>}
                

                
            </div>
        </div>
    );
};

export default Card;