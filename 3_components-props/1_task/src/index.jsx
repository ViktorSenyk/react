import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Due"
    birthDate={new Date('1995')}
  />,
  rootElem
);
