import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import {Button} from 'react-foundation';

import {RoomListActions} from '../../../state/actionsIndex';
const { requestPostRoom } = RoomListActions;

const CreateRoomButton = React.createClass({
  handleCreateClick(event) {
    event.preventDefault();
    this.props.dispatch(requestPostRoom());
  },
  render() {
    return(
      <Button onClick={this.props.handleCreateClick}>Create Room</Button>
    )
  }
})

CreateRoomButton.propTypes = {
  handleCreateClick: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCreateClick: () => {
      dispatch(requestPostRoom());
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateRoomButton);
