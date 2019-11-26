import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {socket} from '../../index';

import { Column, Colors } from 'react-foundation';

import { sessionActions, CurrentRoomActions } from '../../state/actionsIndex';
const { updateMessages } = CurrentRoomActions;
const { selectRoom } = sessionActions;

class ClickableRoom extends React.Component {
  handleRoomClick(event) {
    event.preventDefault();
    this.props.dispatch(selectRoom(this.props));

    if (this.props.joinedRooms && this.props.selectedRoom) {
      console.log(this.props.joinedRooms);
      console.log(this.props.selectedRoom);
      if (this.props.joinedRooms[this.props.selectedRoom]) {
        const roomId = event.target.value || this.props.selectedRoom.id;

        socket.emit('messagesForRoom', roomId, (messages) => {
          this.props.updateMessages(messages);
        })
      }
    }
  }
  updateMessages(messages) {
    this.props.dispatch(updateMessages(messages));
  }
  render() {
    return(
      <li>
        <Column small={7}>
          <a onClick={this.props.handleRoomClick}>{this.props.id}</a>
        </Column>
        <Column small={5} color={Colors.ALERT}>
          <i className='fa fa-user' aria-hidden="true"></i> {this.props.userCount}
        </Column>
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleRoomClick: (event) => {
      dispatch(selectRoom(ownProps));
    },
    updateMessages: (messages) => {
      dispatch(updateMessages(messages));
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    currentRooms: state.session.currentRooms,
    selectedRoom: state.session.selectedRoom,
    joinedRooms: state.session.joinedRooms,
    currentRoom: state.CurrentRoom.id
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClickableRoom);
