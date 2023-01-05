import React, { Component } from 'react';
import TasksList from './TasksList';

export default class TodoList extends Component {
  render = () => (
    <>
      <h1 className="title">Todo List</h1>
        <TasksList />
    </>
  );
}
