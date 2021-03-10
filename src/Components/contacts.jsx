import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import SearchInput from './searchInput';

const Contacts = ({ user, currentContact, selectContact }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts, setContacts] = useState([]);
  var delay = 0;

  const populateUsers = async (user) => {
    var { data } = await getUsers();
    // selectContact(data[0]);
    data = data.filter((d) => d._id !== user._id);
    setContacts(data);
  };

  useEffect(() => {
    populateUsers(user);
  }, [user]);

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
          className={
            m._id === currentContact._id ? 'selected-contact' : 'contact'
          }
          key={m._id}
          style={{ animationDelay: `${(delay += 0.1)}s` }}
          onClick={() => selectContact(m)}
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
