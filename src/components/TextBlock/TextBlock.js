import React from 'react';
import './TextBlock.css';

function TextBlock(props) {

  return (
    <p className="text">
      {props.children}
    </p>
  );
}

export default TextBlock;
