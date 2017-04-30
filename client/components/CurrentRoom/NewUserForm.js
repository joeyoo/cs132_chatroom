import React from 'react';
import { connect } from 'react-redux';
import { socket } from '../../index';
import {Column} from 'react-foundation';

import { sessionActions, CurrentRoomActions } from '../../state/actionsIndex';
const {joinRoom} = sessionActions;
const {setCurrentRoomId, setMyUsername} = CurrentRoomActions;

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const userData = {
      username: event.currentTarget.username.value,
      roomID: this.props.roomID
    };
    socket.emit('createUsername', userData, (confirmedData)=>{
      const { username, roomID } = confirmedData;

      this.props.dispatch(joinRoom(username, roomID));
      this.props.dispatch(setCurrentRoomId(roomID));
      this.props.dispatch(setMyUsername(username));

      socket.emit('usernameCreated', confirmedData);
    });
  }
  render() {
    return(
      <Column id='selectedRoom' className='large-7'>
        <form onSubmit={this.handleSubmit}>
          <label> Before you can start talking to yourself, you need to create a username:
            <input type='text' name='username' />
          </label>
          <input type='submit' />

        </form>
      </Column>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    roomID: state.session.selectedRoom.id
  }
}

export default connect(mapStateToProps)(NewUserForm);
