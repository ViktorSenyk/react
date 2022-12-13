import React from 'react';
import UserAvatar from './Avatar';
import './userInfo.scss'

export default (props) => (
  <div className="user-info">
    <UserAvatar avatarUrl={props.avatarUrl} name={props.name} />
    <div className="user-info__name">{props.name}</div>
  </div>
);
