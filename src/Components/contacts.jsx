import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import SearchInput from './searchInput';

const contacts2 = [
  { _id: '1', username: 'Aqib' },
  { _id: '2', username: 'Ali' },
  { _id: '3', username: 'Ahmad' },
  { _id: '4', username: 'Asad' },
  { _id: '5', username: 'Bilal' },
  { _id: '6', username: 'Mawiz' },
  { _id: '7', username: 'Naeem' },
];

const Contacts = ({ currentContact, selectContact }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts, setContacts] = useState(contacts2);
  var delay = 0;

  const populateUsers = async () => {
    const { data } = await getUsers();
    console.log(data)
    // selectContact(data[0]);
    setContacts(data);
  };
  
  useEffect(() => {
    populateUsers();
  }, []);


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
