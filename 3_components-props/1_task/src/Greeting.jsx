import React from 'react';

const Greeting = (props) => (
  <div className="greeting">{`My name is ${props.firstName}  ${
    props.lastName
  }. I am ${new Date().getFullYear() - props.birthDate.getFullYear()} years old`}</div>
);

export default Greeting;
