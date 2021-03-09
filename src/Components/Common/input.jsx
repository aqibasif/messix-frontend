import React from 'react';

const Input = ({ name, label, error, placeholder, ...rest }) => {
  return (
    <div className='form-group'>
      <input
        {...rest}
        name={name}
        id={name}
        placeholder={placeholder}
        className='form-control'
      />
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

export default Input;
