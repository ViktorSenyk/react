import React from 'react';

const Greeting = (props) => (
  <div className="greeting">{`My name is ${props.firstName}  ${props.lastName}. I am ${props.birthDate} years old`}</div>
);

export default Greeting;