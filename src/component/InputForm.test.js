import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputForm from './InputForm';

describe('Form Component', () => {
  test('renders the form with email and name fields', () => {
    const { getByLabelText } = render(<InputForm />);
    
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/name/i)).toBeInTheDocument();
  });

  test('displays validation messages when fields are empty', () => {
    const { getByText, getByLabelText } = render(<InputForm />);
    
    fireEvent.change(getByLabelText(/email/i), { target: { value: '' } });
    fireEvent.change(getByLabelText(/name/i), { target: { value: '' } });
    fireEvent.click(getByText(/submit/i));
    
    expect(getByText(/email is required/i)).toBeInTheDocument();
    expect(getByText(/name is required/i)).toBeInTheDocument();
  });

  test('does not display validation messages when fields are filled', () => {
    const { queryByText, getByText, getByLabelText } = render(<InputForm />);
    
    fireEvent.change(getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.click(getByText(/submit/i));
    
    expect(queryByText(/email is required/i)).not.toBeInTheDocument();
    expect(queryByText(/name is required/i)).not.toBeInTheDocument();
  });
});
