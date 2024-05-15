import React from 'react';
import { render,screen, fireEvent, waitFor } from '@testing-library/react';
import InputForm from './InputForm';

// test.skip('renders form with proper inputs', () => {
//   const { getByLabelText, getByText } = render(<InputForm />);
//   expect(getByLabelText('Name:')).toBeInTheDocument();
//   expect(getByLabelText('Email:')).toBeInTheDocument();
//   expect(getByText('Submit')).toBeInTheDocument();
// });

// //describe
// describe("UI test case group", () => {
//   test.skip("test case 1", () => {
//   const { getByLabelText } = render(<InputForm />);
//   expect(getByLabelText('Name:')).toBeInTheDocument();
//   });
//   test.skip("test case 2", () => {
//     const { getByLabelText } = render(<InputForm />);
//     expect(getByLabelText('Email:')).toBeInTheDocument();
    
//   });
// });

// //fireEvent on change value
// test.skip('typing in name input updates the state', () => {
//   render(<InputForm />);
  
//   // Use getByLabelText to select the name input by its label
//   const nameInput = screen.getByLabelText('Name:');
  
//   fireEvent.change(nameInput, { target: { value: 'John' } });
  
//   expect(nameInput.value).toBe('John');
// });

// //fireEvent on btn change
// test('click event', () => {
//   render(<InputForm />);
  
//   const btn =screen.getByRole("button")
//   fireEvent.click(btn)

//   expect(screen.getByText("Hello World")).toBeInTheDocument();
// });



//automate onchange testing
  test('renders form with proper inputs', () => {
  const { getByText } = render(<InputForm />);
  const btn=screen.getByTestId("submit1");
  fireEvent.click(btn);
  expect(getByText('hello')).toBeInTheDocument();
});