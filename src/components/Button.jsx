import React from 'react';

import { form } from '../style';

const Button = (props) => {

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth' 
        });
      };

    return (
        <button 
            className={`${form.button} w-1/2`}
            onClick={scrollToBottom}
        >
            <a href={`#${props.page}`}>Contact Me</a>
        </button>
    );
};

export default Button;