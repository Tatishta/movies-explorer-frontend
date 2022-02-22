import React from 'react';
import './ButtonGrey.css';


function ButtonGrey(props) {

  return (
    <button className="button-grey">
      {props.name}
    </button>
  );
}

export default ButtonGrey;
