import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div className="Box">
        <div
          style={{
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            backgroundColor: this.props.color,
          }}
        ></div>
        <button>X</button>
      </div>
    );
  }
}

export default Box;
