import React, { useState } from 'react';

function InputForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [flag, setFlag] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" onClick={(e) => setFlag(true)} data-testid="submit1">Submit</button>
      </form>
      <p>
      {flag ? 
        "hello" : null}
      </p>
    </div>
  );
}

export default InputForm;
