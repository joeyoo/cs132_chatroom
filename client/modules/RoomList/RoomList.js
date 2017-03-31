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
        <ul className='menu vertical roomList'>
          <li className='menu-text'>Public Rooms</li>
          {console.log(this.props)}

          {/* {this.props.currentRooms.map(function(room) {
            return(
              <li>
                {room.id} -
                {room.name}
              </li>
            )
          })} */}

        </ul>
      </Column>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    currentRooms: state.currentRooms
  }
}

export default connect(mapStateToProps)(RoomList);
