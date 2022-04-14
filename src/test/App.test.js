import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { findByText, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import List from "../List";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('React App Test', () => {

  it.skip('Show List Test', async () => {
    const { debug } = render(<App/ >);

    const listButton = screen.getByText('Assignments');
    userEvent.click(listButton);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Add Assignment...'));
      
      debug();
    });

  });
  
  it('List Click Event', async () => {
    const { debug } = render(<App />);
    const listButton = screen.getByText('Assignments');

    fireEvent.click(listButton);

    waitFor(() => {
      expect(screen.findByText('Add Assignment...')).toBeInTheDocument();
    });
    
    debug();

    // waitFor(() => {
    //   expect(screen.getByText('Add Assignment...')).toBeInTheDocument();

    //   debug();
    // }) 
    

  });

  it.skip('List Test', async () => {

  })

})