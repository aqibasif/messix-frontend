import React from 'react';

const SearchInput = (props) => {
  const { value: searchQuery, updateSearch } = props;
  return (
    <input
      type='text'
      name='query'
      className='form-control search-input'
      placeholder='Search...'
      value={searchQuery}
      onChange={(e) => updateSearch(e.currentTarget.value)}
    />
  );
};

export default SearchInput;
