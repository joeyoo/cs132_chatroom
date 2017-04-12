import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { Column, Colors } from 'react-foundation';

import { sessionActions } from '../../state/actionsIndex';
const {setCurrentRoom} = sessionActions;

const ClickableRoom = React.createClass({
  handleRoomClick(event) {
    event.preventDefault();
    this.props.dispatch(setCurrentRoom(this.props));
  },
  render() {
    return(
      <li>
        <Column small={7}>
          <a onClick={this.props.handleRoomClick}>{this.props.id}</a>
        </Column>
        <Column small={5} color={Colors.ALERT}>
          <i className='fa fa-user' aria-hidden="true"></i> 1
        </Column>
      </li>
    )
  }
})


ClickableRoom.propTypes = {
  id: PropTypes.string.isRequired,
  handleRoomClick: PropTypes.func.isRequired,
  userCount: PropTypes.number
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleRoomClick: () => {
      dispatch(setCurrentRoom(ownProps))
    }
  }
}

export default connect(null, mapDispatchToProps)(ClickableRoom);
