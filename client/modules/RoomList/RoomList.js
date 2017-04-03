import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ClickableRoom from './components/ClickableRoom';

import { Actions } from './state/index';
const { fetchRoomsList } = Actions;

const RoomList = React.createClass({
    componentDidMount() {
      this.props.dispatch(fetchRoomsList());
    },
    render() {
      return(
        <div>
          <h5 style={{textAlign:'center'}}>Public Rooms</h5>
          <ul className='menu vertical roomList'>
            {this.props.currentRooms.map(function(room) {
              return (
                <ClickableRoom {...room} />
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
    name: PropTypes.string
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    currentRooms: state.RoomList.currentRooms,
    currentRoom: state.RoomList.currentRoom
  }
}

export default connect(mapStateToProps)(RoomList);
