import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Tom',
  avatarUrl:
    'https://img.favpng.com/14/3/22/stock-photography-computer-icons-user-png-favpng-TWgLj8kmcdnekcpWySfpV97h3.jpg',
};

const App = () => (
  <Comment author={userInfo} text="Good job!" date="2019-01-01T11:32:19.566Z" />
);

export default App;
