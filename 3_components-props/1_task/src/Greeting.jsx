import React from 'react';

const Greeting = (props) => (
  <div className="greeting">{`My name is ${props.firstName}  ${
    props.lastName
  }. I am ${new Date(new Date().getTime() - props.birthDate.getTime()).getFullYear() - 1970} years old`}</div>
);

export default Greeting;
