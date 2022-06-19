import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {

  const { defaultValue, onChange, name } = props;
  const [isActive, setIsActive] = React.useState(defaultValue);

  const checkBoxClassName = isActive ? "filter__checkbox filter__checkbox_active" : "filter__checkbox";
  const toggleClassName = isActive ? "filter__toggle filter__toggle_active" : "filter__toggle";

  const toggleHandler = () => {
    const value = !isActive;
    setIsActive(value);
    onChange(value);
  };

  return (
    <div className="filter">
        <div className="filter__button" onClick={toggleHandler}>
          <div className={checkBoxClassName} />
          <div type="toggle" className={toggleClassName} />
        </div>
        <span className="filter__shorts">
          {name}
        </span>
    </div>
  );
}

export default FilterCheckbox;
