import React from 'react';
import moment from 'moment';

const formatDate = (date) => moment(date).format('YYYY');

const Greeting = (props) => (
  <div className="greeting">{`My name is ${props.firstName}  ${
    props.lastName
  }. I am ${
    formatDate(new Date()) - formatDate(props.birthDate)
  } years old`}</div>
);

export default Greeting;
