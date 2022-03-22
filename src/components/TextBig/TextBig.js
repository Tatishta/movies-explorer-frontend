import React from 'react';
import './TextBig.css';


function TextBig(props) {

  return (
    <h1 className={`text-big ${props.className}`}>
      {props.children}
    </h1>
  );
}

export default TextBig;
