import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import List from "./List";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

function addItem(item) {
  arr.push(item);
}

const arr = ['Lee', "Holand"];

describe('React App Test', () => {

  it('List Test', async () => {
    const component = <List addFunction={addItem} title="title" placeholder='somethin' currList={arr} />;
    const {debug} = render(component);

    const inputs = screen.getByPlaceholderText('somethin')
    const submit = screen.getByText('Submit');
    
    userEvent.type(inputs, 'Daen');
    userEvent.click(submit);
    
    debug();
  })

})