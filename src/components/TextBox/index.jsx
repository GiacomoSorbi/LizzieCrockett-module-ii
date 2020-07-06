import React from 'react';
import './TextBox.css';

const TextBox = ({title, text}) => {
    /*props are passed from each instance of TextBox,
  allowing the component to render differently based on the data provided.
  Props are destructured with {} to make the process less "clunky"*/   
   return (
        <div className="text-box">
            {/*props above are rendered here as meaningful content*/}
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

//exports the TextBox component for use elsewhere
export default TextBox;

