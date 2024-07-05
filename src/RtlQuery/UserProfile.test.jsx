// UserProfile.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for matchers like toBeInTheDocument
import UserProfile from './UserProfile';

describe('UserProfile Component', () => {
  test.skip('renders heading', () => {
    render(<UserProfile />);
    const headingElement = screen.getByRole('heading', { name: 'User Profile' });
    expect(headingElement).toBeInTheDocument();
  });

  test.skip('renders image with alt text', () => {
    render(<UserProfile />);
    const imgElement = screen.getByAltText('User Avatar');
    expect(imgElement).toBeInTheDocument();
  });

  test.skip('renders username with test.skip id', () => {
    render(<UserProfile />);
    const usernameElement = screen.getByTestId('username');
    expect(usernameElement).toBeInTheDocument();
    expect(usernameElement).toHaveTextContent('Abhi Dharamkar');
  });

  test.skip('renders email with aria-label', () => {
    render(<UserProfile />);
    const emailElement = screen.getByLabelText('email');
    expect(emailElement).toBeInTheDocument();
    expect(emailElement).toHaveTextContent('abhishek.dharamkar@mb.com');
  });

  test.skip('renders button by text', () => {
    render(<UserProfile />);
    const buttonElement = screen.getByText('Update Profile');
    expect(buttonElement).toBeInTheDocument();
  });

  test.skip('renders link by href', () => {
    render(<UserProfile />);
    const linkElement = screen.getByRole('link', { name: 'Logout' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/logout');
  });
});
