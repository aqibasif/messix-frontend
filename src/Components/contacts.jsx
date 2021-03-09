import React, { useState } from 'react';
import SearchInput from './searchInput';

const contacts = [
  { username: 'Aqib' },
  { username: 'Ali' },
  { username: 'Ahmad' },
  { username: 'Asad' },
  { username: 'Bilal' },
  { username: 'Mawiz' },
  { username: 'Naeem' },
];

const Contacts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  var delay = 0;

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const getSearchedContacts = () => {
    let searchedContacts = contacts;
    if (searchQuery)
      searchedContacts = contacts.filter((c) =>
        c.username.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return searchedContacts;
  };

  return (
    <div className='contacts'>
      <div className='search-bar'>
        <SearchInput searchQuery={searchQuery} updateSearch={handleSearch} />
      </div>
      {getSearchedContacts().map((m) => (
        <div
          className='contact'
          key={m.username}
          style={{ animationDelay: `${(delay += 0.1)}s` }}
        >
          <div className='profile-pic'>
            <p>{m.username.charAt(0)}</p>
          </div>
          <h5>{m.username}</h5>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
