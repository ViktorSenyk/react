import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreateTaskInput extends Component {
  state = {
    value: '',
  };

  handleChange = (e) => this.setState({ value: e.target.value });

  render = () => (
    <div className="create-task">
      <input
        type="text"
        className="create-task__input"
        value={this.state.value}
        onChange={this.handleChange}
      />
      <button
        className="btn create-task__btn"
        onClick={() => {
          this.props.onCreateTask(this.state.value);
          this.setState({ value: '' });
        }}
      >
        Create
      </button>
    </div>
  );
}

CreateTaskInput.propTypes = {
  onCreateTask: PropTypes.func.isRequired,
};
