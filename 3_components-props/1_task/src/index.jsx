import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const rootElem = document.querySelector('#root');

const date = new Date().getFullYear() - new Date('2005').getFullYear();

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Due"
    birthDate={date}
  />,
  rootElem
);
