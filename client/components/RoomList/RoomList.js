import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {socket} from '../../index';

import { Column } from 'react-foundation';

import ClickableRoom from './ClickableRoom';
import CreateRoomButton from './CreateRoomButton';

import { RoomListActions } from '../../state/actionsIndex';
const { updateRoomsList } = RoomListActions;

const RoomList = React.createClass({
  componentDidMount() {
    socket.on('chatrooms', (chatrooms) => {
      this.props.dispatch(updateRoomsList(chatrooms));
    });
  },
  handleCreateClick() {
    socket.emit('createRoom');
  },
  render() {
    return(
      <Column id='roomList' className='large-2'>
        <h5 className='section-header'>Live Rooms</h5>
        <CreateRoomButton onCreateClick={this.handleCreateClick}/>
        <ul className='menu vertical'>
          {this.props.currentRooms.map(function(room) {
            return (
              <ClickableRoom {...room} key={room.id} />
            )
          })}
        </ul>
      </Column>
    )
  }
});

RoomList.propTypes = {
  currentRooms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    userCount: PropTypes.number
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentRooms: state.RoomList.currentRooms,
    selectedRoom: state.session.selectedRoom
  }
}

export default connect(mapStateToProps)(RoomList);
