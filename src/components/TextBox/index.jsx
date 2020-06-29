import React from 'react';
import './TextBox.css';

const TextBox = ({title, children}) => {
   return (
        <div className="text-box">
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
    )
}

export default TextBox;

