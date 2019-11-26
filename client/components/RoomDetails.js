import React, { PropTypes } from 'react';
import {Column} from 'react-foundation';

import { connect } from 'react-redux';

class RoomDetails extends React.Component {
  render() {
    let myUsername = this.props.joinedRooms[this.props.id];

    let everyoneButMe = this.props.users.filter((user)=>{return myUsername != user.username});

    return(
      <Column id='roomDetails' className='large-3'>
        <h5 className='section-header'>Room Details</h5>
        <ul className='menu vertical'>
          <li> id: {this.props.id}</li>
          <li> Users: </li>
          <li>{myUsername}</li>
          {everyoneButMe.map((user)=>{return(<li>{user.username}</li>)})}
        </ul>

      </Column>
    )
  }
};
const mapStateToProps = (state) => {
  return {
    id: state.session.selectedRoom.id,
    users: state.CurrentRoom.users,
    joinedRooms: state.session.joinedRooms
  }
};

export default connect(mapStateToProps)(RoomDetails);
