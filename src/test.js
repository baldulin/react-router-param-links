import {Link, NavLink} from './'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

describe('Link', () => {
  it('is truthy', () => {
    expect(Link).toBeTruthy()
  })
});

it('Link renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
        <Link to="/test/:param/" param="funf">test</Link>
    </BrowserRouter>, div);
});

describe('NavLink', () => {
  it('is truthy', () => {
    expect(NavLink).toBeTruthy()
  })
});

it('NavLink renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
        <NavLink to="/test/:param/" param="funf">test</NavLink>
    </BrowserRouter>, div);
});

