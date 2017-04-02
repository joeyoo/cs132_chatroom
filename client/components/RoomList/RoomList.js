import React, {PropTypes} from 'react';
import {Column} from 'react-foundation';
import {connect} from 'react-redux';

import {fetchRoomsList} from './actions';

const {arrayOf, string, shape, func} = PropTypes;

const RoomList = React.createClass({
  propTypes: {
    currentRooms: arrayOf(shape({
      id: string.isRequired,
      name: string
    }).isRequired).isRequired,
    dispatch: func.isRequired
  },
  componentDidMount() {
    this.props.dispatch(fetchRoomsList());
  },
  render() {
    return(
      <Column large={2}>
        <h5 style={{textAlign:'center'}}>Public Rooms</h5>
        <ul className='menu vertical roomList'>
          {this.props.currentRooms.map(function(room) {
            return( <li key={room.id}>{room.id}</li> )
          })}
        </ul>
      </Column>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    currentRooms: state.RoomList.currentRooms
  }
}

export default connect(mapStateToProps)(RoomList);
