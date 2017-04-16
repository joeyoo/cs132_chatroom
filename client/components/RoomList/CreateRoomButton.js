import React from 'react';

import {Button} from 'react-foundation';

const CreateRoomButton = React.createClass({
  handleClick(event) {
    this.props.onCreateClick();
  },
  render() {
    return(
      <Button onClick={this.handleClick}>Create Room</Button>
    )
  }
});

export default CreateRoomButton;
