import React, { Component } from 'react';
import Box from './Box';

class BoxList extends Component {
  state = {
    boxes: [{ height: 300, width: 100, color: 'green' }],
  };

  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box height={box.height} width={box.width} color={box.color} />
    ));
    return (
      <div className="BoxList">
        <h1>Box Creator</h1>
        {boxes}
      </div>
    );
  }
}

export default BoxList;
