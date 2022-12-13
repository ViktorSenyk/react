import React from 'react';
import Greeting from './Greeting';

const App = () => (
  <Greeting
    firstName="John"
    lastName="Due"
    birthDate={new Date().getFullYear() - new Date('1995').getFullYear()}
  />
);

export default App;
