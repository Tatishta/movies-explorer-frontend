import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {

  const [searchValue, setSearchValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
          value={searchValue}
          required>
        </input>
        <button
          className="search__button"
          type="submit">
          Поиск
        </button>
      </form>
      <FilterCheckbox name="Короткометражки"/>
    </div>
  );
}

export default SearchForm;
