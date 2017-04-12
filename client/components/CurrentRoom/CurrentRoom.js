import React, {Component, PropTypes} from 'react';
import {Column} from 'react-foundation';

import {connect} from 'react-redux';

import MessagesContainer from './MessagesContainer';
import NewUserForm from './NewUserForm';
import ChatInput from './ChatInput';

import { CurrentRoomActions, sessionActions } from '../../state/actionsIndex';
const { fetchMessages, setMyUsername } = CurrentRoomActions;
const { joinRoom } = sessionActions;

const CurrentRoom = React.createClass({
  handleUsernameSubmit(username, roomID) {
    dispatch(setMyUsername(username));
    dispatch(joinRoom(username, roomID));
  },
  componentDidMount() {
    this.content;
    this.messages = this.props.messages || [];
  },
  render() {
    if (this.props.currentRoom.id) {
      if (this.props.currentRoom.id == this.props.myUsername.roomID) {
        this.content = <MessagesContainer messages={this.messages} />
      }
      else {
        this.content = <NewUserForm onUsernameSubmit={this.props.handleUsernameSubmit} roomID={this.props.currentRoom.id}/>
      }
    }
    else {
      this.content = <NewUserForm onUsernameSubmit={this.props.handleUsernameSubmit} />
    }
    return(
      <Column large={7} className='chatroom'>
        <h5 style={{textAlign:'center'}}>{this.props.currentRoom.id || "No Room Selected"}</h5>
        { this.content }
        <ChatInput />
      </Column>
    )
  }
});

const {shape, string, func, arrayOf, number} = PropTypes;
CurrentRoom.propTypes = {
  currentRoom: shape({ id: string }),
  dispatch: func.isRequired,
  messages: arrayOf(shape({
    id: number.isRequired,
    body: string.isRequired,
    sender: string.isRequired,
    roomID: string.isRequired,
    createdAt: string.isRequired
  }))
}

const mapStateToProps = (state) => {
  return {
    currentRoom: state.session.currentRoom,
    messages: state.CurrentRoom.messages,
    myUsername: state.CurrentRoom.myUsername
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUsernameSubmit: (username, roomID) => {
      dispatch(setMyUsername(username));
      dispatch(joinRoom(username, roomID))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentRoom);