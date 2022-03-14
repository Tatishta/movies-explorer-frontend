import React from 'react';
import './ButtonGrey.css';
import { Link } from "react-router-dom";

function ButtonGrey(props) {

  return (
    <button
      className="button-grey">
      {props.name}
    </button>
  );
}

export default ButtonGrey;
