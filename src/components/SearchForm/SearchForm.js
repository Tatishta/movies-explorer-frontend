import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {

  return (
    <div className="search">
      <form className="search__form">
        <input
          type="text"
          className="search__input"
          placeholder="Фильм"
          name="movie">
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
