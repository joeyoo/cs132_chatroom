import React, {PropTypes} from 'react';
import {Column, Link} from 'react-foundation';

import {connect} from 'react-redux';

import { Actions } from './state/index';
const { fetchMessages } = Actions;

const Room = React.createClass({
  componentDidUpdate() {
    this.props.dispatch(fetchMessages(this.props.currentRoom.id));
  },
  render() {
    let roomTitle = this.props.currentRoom.id || "No Room Selected";
    let messages = [];

    if (roomTitle.length == 6) {
      messages = this.props.messages;
    };

    return(
      <Column large={7} className='chatroom'>
        <h5 style={{textAlign:'center'}}>{roomTitle}</h5>
        <ul className='menu vertical chatroom'>
          {messages.map(function(message) {
            return(<li>{message.body}</li>)
          })}
        </ul>
        <textarea rows='4' cols='50'></textarea>
        <Link isExpanded>Send</Link>
      </Column>
    )
  }
});

Room.Proptypes = {
  currentRoom: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string
  }),
  dispatch: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    roomID: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  }))
}

const mapStateToProps = (state) => {
  return {
    currentRoom: state.RoomList.currentRoom,
    messages: state.Room.messages
  }
}

export default connect(mapStateToProps)(Room);
