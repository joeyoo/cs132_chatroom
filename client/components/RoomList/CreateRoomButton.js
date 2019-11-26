import React from 'react';

import {Button} from 'react-foundation';

class CreateRoomButton extends React.Component {
  handleClick(event) {
    this.props.onCreateClick();
  }
  render() {
    return(
      <Button onClick={this.handleClick}>Create Room</Button>
    )
  }
};

export default CreateRoomButton;
