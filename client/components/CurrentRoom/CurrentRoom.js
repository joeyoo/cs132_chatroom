import React, {Component, PropTypes} from 'react';
import {Column} from 'react-foundation';
import {connect} from 'react-redux';
import {socket} from '../../index';

import MessagesContainer from './MessagesContainer';
import ChatInput from './ChatInput';

import { CurrentRoomActions } from '../../state/actionsIndex';
const { updateMessages, addMessage } = CurrentRoomActions;


class CurrentRoom extends Component {
  constructor(props) {
    super(props);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.socket = socket;
  }

  componentDidMount() {
    this.socket.emit('joinRoom', {
      roomID: this.props.selectedRoom.id,
      username: this.props.myUsername
    });
    this.socket.on('getMessages', (messages) => {
      this.props.dispatch(updateMessages(messages));
    });
    this.socket.on('message', (message) => {
      this.props.dispatch(addMessage(message));
    });
  }

  handleMessageSubmit(message, roomID) {
    this.socket.emit('message', {
      sender: message.sender,
      body: message.body,
      roomID: roomID
    });
  }

  render() {
    let messages = this.props.messages || [];

    return(
      <Column id='selectedRoom' className='medium-7'>
        <h5 className='section-header'>
          {this.props.selectedRoom.id || "Click a Room To Join"}
        </h5>
        <MessagesContainer messages={messages} />
        <ChatInput onMessageSubmit={this.handleMessageSubmit} roomID={this.props.selectedRoom.id}
        username={this.props.myUsername}/>
      </Column>
    )
  }
};

const {shape, string, func, arrayOf, number} = PropTypes;
CurrentRoom.propTypes = {
  selectedRoom: shape({ id: string }),
  dispatch: func.isRequired
}

const mapStateToProps = (state) => {
  let myUsername = state.CurrentRoom.myUsername;

  if (state.session.joinedRooms[state.session.selectedRoom.id]) {
    myUsername = state.session.joinedRooms[state.session.selectedRoom.id];
  };

  return {
    selectedRoom: state.session.selectedRoom,
    joinedRooms: state.session.joinedRooms,
    messages: state.CurrentRoom.messages,
    myUsername: myUsername
  }
}

export default connect(mapStateToProps)(CurrentRoom);
