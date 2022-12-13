import React from 'react';
import moment from 'moment';

const formatDate = (date) => moment(date).format('DD MMM YY');

export default (props) => (
  <>
    <h6 className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</h6>
    <p className="profile__birth">{`Was born ${formatDate(
      props.userData.birthDate
    )} in ${props.userData.birthPlace}`}</p>
  </>
);
