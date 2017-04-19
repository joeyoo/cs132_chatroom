import React, {Component, PropTypes} from 'react';
import {Column} from 'react-foundation';

import {connect} from 'react-redux';

import MessagesContainer from './MessagesContainer';
import NewUserForm from './NewUserForm';
import ChatInput from './ChatInput';

import { CurrentRoomActions, sessionActions } from '../../state/actionsIndex';
const { fetchMessages, postMessage, setMyUsername } = CurrentRoomActions;
const { joinRoom } = sessionActions;

const CurrentRoom = React.createClass({
  handleUsernameSubmit(username, roomID) {
    this.props.dispatch(setMyUsername(username));
    this.props.dispatch(joinRoom(username, roomID));
  },
  handleMessageSubmit(message, roomID) {
    this.props.dispatch(postMessage(message, roomID));
  },
  fetchMessages(roomID) {
    this.props.dispatch(fetchMessages(roomID));
  },
  componentDidMount() {
    setInterval(()=> {
      this.props.fetchMessages(this.props.currentRoom.id)
    }, 5000);
  },
  componentDidUpdate(prevProps) {
    clearInterval();
  },
  render() {

    let content, chatInput;
    let messages = this.props.messages || [];

    if (this.props.currentRoom.id) {
      if (this.props.joinedRooms[this.props.currentRoom.id]) {
        content = <MessagesContainer messages={messages} />
        chatInput = <ChatInput onMessageSubmit={this.props.handleMessageSubmit} roomID={this.props.currentRoom.id}
        username={this.props.myUsername}/>
      }
      else {
        content = <NewUserForm onUsernameSubmit={this.props.handleUsernameSubmit} roomID={this.props.currentRoom.id}/>
      }
    }
    return(
      <Column id='currentRoom' className='large-7'>
        <h5 className='section-header'>
          {this.props.currentRoom.id || "Click a Room To Join"}
        </h5>
        { content }
        { chatInput }
      </Column>
    )
  }
});

const {shape, string, func, arrayOf, number} = PropTypes;
CurrentRoom.propTypes = {
  currentRoom: shape({ id: string }),
  dispatch: func.isRequired
}

const mapStateToProps = (state) => {
  let myUsername = state.CurrentRoom.myUsername;

  if (state.session.joinedRooms[state.session.currentRoom.id]) {
    myUsername = state.session.joinedRooms[state.session.currentRoom.id];
  };

  return {
    currentRoom: state.session.currentRoom,
    joinedRooms: state.session.joinedRooms,
    messages: state.CurrentRoom.messages,
    myUsername: myUsername
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleUsernameSubmit: (username, roomID) => {
      dispatch(setMyUsername(username));
      dispatch(joinRoom(username, roomID));
    },
    handleMessageSubmit: (message, roomID) => {
      dispatch(postMessage(message, roomID));
    },
    fetchMessages: (roomID) => {
      dispatch(fetchMessages(roomID));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentRoom);
