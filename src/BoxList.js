import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';

class BoxList extends Component {
  state = {
    boxes: [],
  };

  create = (newBox) => {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  };

  remove = (id) => {
    this.setState({
      boxes: this.state.boxes.filter((box) => box.id !== id),
    });
  };

  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        height={box.height}
        width={box.width}
        color={box.color}
        key={box.id}
        id={box.id}
        removeBox={() => this.remove(box.id)}
      />
    ));
    return (
      <div className="BoxList">
        <h1>Box Creator</h1>
        <BoxForm createBox={this.create} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
