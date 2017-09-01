import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({value, gemsAreLoading, handleOnChange, handleOnSubmit}) => (
  <div className="search-box__container">
    <form className="search-box__form" onSubmit={handleOnSubmit}>
      <div className="search-box__input-container">
        <input
          id="search-bar"
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          value={value}
          disabled={gemsAreLoading}
          className="input-field"
          placeholder="Search Gems..."
          onChange={handleOnChange} />
        <div className="search-box__icon" />
      </div>
    </form>
  </div>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  gemsAreLoading: PropTypes.bool.isRequired
};

export default SearchBar;