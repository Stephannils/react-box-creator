import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class BoxForm extends Component {
  state = {
    height: '',
    width: '',
    color: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const newBox = { ...this.state, id: uuid() };
    this.props.createBox(newBox);
    e.preventDefault();
    this.setState({ height: '', width: '', color: '' });
  };

  render() {
    return (
      <form className="BoxForm" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            type="text"
            name="height"
            value={this.state.height}
            id="height"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="width">Width: </label>
          <input
            type="text"
            name="width"
            value={this.state.width}
            id="width"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="color">Color: </label>
          <input
            type="text"
            name="color"
            value={this.state.color}
            id="color"
            onChange={this.handleChange}
          />
        </div>
        <button>Add Box!</button>
      </form>
    );
  }
}

export default BoxForm;
