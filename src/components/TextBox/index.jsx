import React from 'react';
import './TextBox.css';

const TextBox = ({title, text}) => {
   return (
        <div className="text-box">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default TextBox;

