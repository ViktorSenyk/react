import React, { Component } from 'react';

export default class UserForm extends Component {
  // state = {
  //   name: '',
  //   student: false,
  //   occupation: '',
  //   about: '',
  // };

  // onChanger = (e) =>
  //   this.setState({
  //     [e.target.name]:
  //       e.target.type === 'checkbox' ? e.target.checked : e.target.value,
  //   });

  setRef = (node) => (this.formRef = node);

  render = () => (
    <form
      className="login-form"
      ref={this.setRef}
      onSubmit={(e) => {
        const formData = [...new FormData(this.formRef)].reduce((acc, [name, value]) => ({...acc, [name]: value}), {})
        this.props.onSubmit(e, formData);
      }}
    >
      <h1 className="form-title">Profile</h1>

      <div className="form-control">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-input" type="text" id="name" name="name" />
      </div>

      <div className="form-control">
        <label className="form-label" htmlFor="student">
          Student
        </label>
        <input
          className="form-input"
          type="checkbox"
          id="student"
          name="student"
        />
      </div>

      <div className="form-control">
        <label className="form-label" id="occupation" htmlFor="occupation">
          Occupation
        </label>
        <select name="occupation" className="form-input">
          <option value="london">London</option>
          <option value="new-york">New York</option>
          <option value="sidney">Sidney</option>
          <option value="berlin">Berlin</option>
        </select>
      </div>

      <div className="form-control">
        <label className="form-label" id="about" htmlFor="about">
          About
        </label>
        <textarea name="about" className="form-input"></textarea>
      </div>

      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
