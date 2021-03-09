import React from 'react';

const SearchInput = (props) => {
  const { value: searchQuery, updateSearch, focus } = props;
  return (
    <input
      type='text'
      name='query'
      className='form-control search-input'
      placeholder='Search...'
      value={searchQuery}
      onChange={(e) => updateSearch(e.currentTarget.value)}
      autoFocus={checkBool(focus)}
    />
  );
};

function checkBool(x) { if(x) {return true;} else {return false;} }

export default SearchInput;
