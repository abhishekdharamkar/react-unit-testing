import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import InputForm from './InputForm';

test('renders form with proper inputs', () => {
  const { getByLabelText, getByText } = render(<InputForm />);
  expect(getByLabelText('Name:')).toBeInTheDocument();
  expect(getByLabelText('Email:')).toBeInTheDocument();
  expect(getByLabelText('Message:')).toBeInTheDocument();
  expect(getByText('Submit')).toBeInTheDocument();
});

test('submits form with valid data', async () => {
  const { getByLabelText, getByText } = render(<InputForm />);
  
  // Fill out form fields
  fireEvent.change(getByLabelText('Name:'), { target: { value: 'John Doe' } });
  fireEvent.change(getByLabelText('Email:'), { target: { value: 'john@example.com' } });
  fireEvent.change(getByLabelText('Message:'), { target: { value: 'Hello, World!' } });

  // Submit form
  fireEvent.click(getByText('Submit'));

  // Wait for form submission logic (here, console.log) to execute
  await waitFor(() => {
    expect(console.log).toHaveBeenCalledWith('Form submitted:', {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, World!'
    });
  });
});

test('requires all fields to be filled', async () => {
  const { getByLabelText, getByText } = render(<InputForm />);

  // Submit form without filling any fields
  fireEvent.click(getByText('Submit'));

  // Ensure error messages are displayed
  expect(getByText('Please fill out this field.')).toBeInTheDocument();
});
