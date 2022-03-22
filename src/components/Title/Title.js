import React from 'react';
import './Title.css';

function Title(props) {

  return (
    <h2 className="title">
      {props.name}
    </h2>
  );
}

export default Title;
