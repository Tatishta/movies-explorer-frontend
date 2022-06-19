import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  const { defaultSearchQuery, defaultIsShort, onSubmit, allowSubmitWithoutQuery } = props;

  const [isShort, setIsShort] = React.useState(defaultIsShort || false);
  const [searchQuery, setSearchValue] = React.useState(defaultSearchQuery || "");


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({searchQuery, isShort});
  }

  function handleToggleIsShort(value) {
    if (searchQuery || allowSubmitWithoutQuery) {
      onSubmit({ searchQuery, isShort: value });
    }
    setIsShort(value);
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="Фильм"
          name="movie"
          onChange={handleChange}
          value={searchQuery}
          required>
        </input>
        <button
          className="search__button"
          type="submit">
          Поиск
        </button>
      </form>
      <FilterCheckbox
        defaultValue={defaultIsShort}
        onChange={handleToggleIsShort}
        name="Короткометражки"/>
    </div>
  );
}

export default SearchForm;
