import React from 'react';
import './ButtonBlue.css';
import { Link } from "react-router-dom";


function ButtonBlue(props) {

  return (
    <Link
      className="button-blue"
      to={props.to}>
      {props.name}
    </Link>
  );
}

export default ButtonBlue;
