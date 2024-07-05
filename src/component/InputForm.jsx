import React, { useState } from 'react';

const InputForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    }

    if (!name) {
      newErrors.name = 'Name is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit data
      console.log({ email, name });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{margin:"9rem",display:"flex",flexDirection:"column",gap:"1rem"}}>
      <div>
        <label htmlFor="email">Email:</label> 
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <button style={{width:"fit-content",placeSelf:"center"}} type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
