import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ClickableRoom from './ClickableRoom';
import CreateRoomButton from './CreateRoomButton';

import { RoomListActions } from '../../state/actionsIndex';
const { fetchRoomsList, requestPostRoom } = RoomListActions;

const RoomList = React.createClass({
  componentDidMount() {
    this.props.dispatch(fetchRoomsList());
  },
  handleCreateClick() {
    this.props.dispatch(requestPostRoom());
  },
  render() {
    return(
      <div>
        <h5 style={{textAlign:'center'}}>Live Rooms</h5>
        <CreateRoomButton onCreateClick={this.handleCreateClick}/>
        <ul className='menu vertical roomList'>
          {this.props.currentRooms.map(function(room) {
            return (
              <ClickableRoom {...room} key={room.id} />
            )
          })}
        </ul>
      </div>
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
    currentRoom: state.session.currentRoom
  }
}

export default connect(mapStateToProps)(RoomList);
