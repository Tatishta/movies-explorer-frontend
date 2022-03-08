import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {

  return (
    <div className="filter">
        <div className="filter__checkbox">

        </div>
        <span className="filter__shorts">
          {props.name}
        </span>
    </div>
  );
}

export default FilterCheckbox;
