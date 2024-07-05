// UserProfile.js
import React from 'react';

const UserProfile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <img src="user.jpg" alt="User Avatar" />
      <p data-testid="username">Abhi Dharamkar</p>
      <p aria-label="email">abhishek.dharamkar@mb.com</p>
      <button>Update Profile</button>
      <a href="/logout">Logout</a>
    </div>
  );
};

export default UserProfile;
